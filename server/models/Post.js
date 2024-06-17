import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId:
        {
            type:String,
            required:true,
        },
        firstname:
        {
            type:String,
            required:true,
        },
        lastname: {
            type: String,
            required: true,
        },
        location:String,
        description: String,
        picturePath: String,
        usePicturePath: String,
        likes: {
            type: Map,
            of:Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    {Timestamp: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;