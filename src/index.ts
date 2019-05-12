import express from './express';
import mongoose from 'mongoose';
import http from 'http';

const port = process.env.PORT || 3000;
const server = http.createServer(express);

server.listen(port);
server.on('error', (e) => {
    console.error('http server listen error\n', e);
});
server.on('listening', () => {
    console.log('server listen, PORT :', port);
    mongoose.connect('mongodb://localhost:27017/database', { useNewUrlParser: true });

    mongoose.connection.on('error', (e) => {
        console.log(`Mongo DB Connection failed.\n${e}`);
    });

    mongoose.connection.once('open', () => {
        console.log('Mongo DB Connect Successfully.');
    })
});