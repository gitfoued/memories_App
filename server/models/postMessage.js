import mongoose from "mongoose"

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    Creator:String,
    tags:[String],
    SelectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

})
const postMessage=mongoose.model('postMessage',postSchema)
export default postMessage;