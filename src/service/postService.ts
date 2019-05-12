import Post from 'models/post';

export default class {
    static async getAllPosts() {
        return await Post.find({});
    }
    //..
}