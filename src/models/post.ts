import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    title: string,
    author: string,
    body: string,
    createdAt: Date,
}

const schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, default: '' },
    // comments: [{ body: String, date: Date }],
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs:  Number
    // },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>('post', schema);