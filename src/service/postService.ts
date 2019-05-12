import Post, { IPost, IPostSearchQuery } from 'models/post';

export default class {
    static async getAllPosts(): Promise<IPost[]> {
        return await Post.find({});
    }

    static async getPost(searchQuery: IPostSearchQuery) {
        return await Post.findOne(searchQuery);
    }

    static async addPost(post: IPost) {
        await post.save();
    }

    static async deletePost(searchQuery: IPostSearchQuery) {
        await Post.deleteOne(searchQuery);
    }
}