import { model, Schema } from "mongoose";

const permissionSchema = new Schema(
{
    StaffId: {
    type: Schema.Types.ObjectId,
    ref: 'staffs',
    required: true
    },

    permissionModel: {
        type: String,
        required: true,
        enum: ['Branch','Transport','Staff']
    },

    actions: {
        type: [String],
        enum: ['GET', 'POST', 'PUT', 'DELETE'],
        default: ['GET'],
        required: true
    }
},
{ timestamps: true }
)

export default model('Permission', permissionSchema)
