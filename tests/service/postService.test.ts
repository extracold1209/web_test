import { expect, assert } from 'chai';
import mongoose, { Error as MongooseError } from 'mongoose';
import Post from 'models/post';
import PostService from 'services/postService';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;
before((done) => {
    mongoServer = new MongoMemoryServer();
    mongoServer
        .getConnectionString()
        .then((mongoUri) => {
            return mongoose.connect(mongoUri, (err) => {
                if (err) done(err);
            });
        })
        .then(() => done());
});

after(() => {
    mongoose.disconnect();
    mongoServer.stop();
});


describe('PostService test', () => {
    //TODO Post 모델 전부 제거 후 PostService 의 메소드로만 대체
    describe('getAllPosts', () => {
        it('데이터가 없는 경우', async () => {
            const posts = await PostService.getAllPosts();
            expect(posts).length(0);
        });
    });

    describe('addPost', () => {
        afterEach((done) => {
            Post.deleteOne({ title: 'dummyTitle' }, done);
        })

        it('정상추가', async () => {
            const dummyPost = new Post({
                title: 'dummyTitle',
                author: 'dummyAuthor',
                body: 'dummyBody',
            });

            await PostService.addPost(dummyPost);
            const postCount = await Post.countDocuments();
            expect(postCount).equal(1);
        });

        it('타이틀이 없는 경우', async () => {
            const dummyPost = new Post({
                author: 'dummyAuthor',
                body: 'dummyBody',
            });

            try {
                await PostService.addPost(dummyPost);
                assert.fail();
            } catch (e) {
                expect(e).is.not.undefined;
            }
        });
    });
});