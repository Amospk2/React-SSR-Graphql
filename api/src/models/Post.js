import mongoose from 'mongoose';


const Schema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    author:{
        type: "ObjectId",
        ref: 'User',
        required: true
    }
})


export default mongoose.model('Post', Schema)