import { join, extname } from "path"
import { BedRequestError, InternalServerError } from "../utils/error.js";
import transportsModel from "../models/transports.model.js";
import branchesModel from "../models/branches.model.js";
class TransportService {
    async getAllTransports(req) {
        const { branch } = req.query;
        
        const branchDoc = await branchesModel.find({name: branch});
        
        if (branchDoc) {
            if (branchDoc.length > 0) {
                const transports = await transportsModel.find({branch: branchDoc[0]._id});
                return {
                    status: 200,
                    transports 
                }
            } else {    
                return {
                    status: 200,
                    transports: []
                }
            }
        }
        const transports = await transportsModel.find();
        return {
            status: 200,
            transports 
        }
    }

    async createTransport(req) {
        const {branch, model, color,price} = req.body;
        const {img} = req.files;

        const filename = Date.now() + extname(img.name)
        img.mv(join(process.cwd(), "src","uploads", filename), (error)=>{
            if (error) {
                throw new InternalServerError(500, "ImternalServerError")
            }
        })

        await transportsModel.create({
            branch,
            model,
            color,
            img: filename,
            price
        });
        return {
            status: 201,
            message: "Transport created successfully",
        }
    }

    async updateTransport(req) {
        const { id } = req.params;  
        const transport = await transportsModel.findByIdAndUpdate(id, req.body);
        if (!transport) {
            throw new BedRequestError(404, "Transport not found");
        }
        return {
            status: 200,
            message: "Transport updated successfully"
        };
    }

    async deleteTransport(req) {
        const { id } = req.params;
        const transport = await transportsModel.findByIdAndDelete(id);
        if (!transport) {
            throw new BedRequestError(404, "Transport not found");
        }
        return {
            status: 200,
            message: "Transport deleted successfully",
        };  
    }   
}
export default new TransportService();