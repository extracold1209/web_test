import { expect } from 'chai';
import mongoose from 'mongoose';
import Post from 'models/post';
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
            const posts = await Post.find({});
            expect(posts).length(0);
        });
    });

    describe('addPost', () => {
        afterEach((done) => {
            Post.deleteOne({title: 'dummyTitle'}, done);
        })

        it('정상추가확인', async () => {
            await new Post({
                title: 'dummyTitle',
                author: 'dummyAuthor',
                body: 'dummyBody',
            }).save();

            const posts = await Post.find({});
            expect(posts).length(1);
        });
    });
});