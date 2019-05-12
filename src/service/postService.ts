import Post, { IPost } from 'models/post';
import { Model } from 'mongoose';

export default class {
    static async addPost(dummyPost: IPost) {
        await dummyPost.save();
    }
    static async getAllPosts(): Promise<IPost[]> {
        return await Post.find({});
    }
    //..
}