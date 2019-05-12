import Post, { IPost } from 'models/post';

export default class {
    static async getAllPosts(): Promise<IPost[]> {
        return await Post.find({});
    }
    //..
}