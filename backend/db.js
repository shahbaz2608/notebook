const mongoose = require('mongoose');

const mongooseURI = 'mongodb://127.0.0.1:27017/notebook';

const connectDB = () => {
    mongoose.connect(mongooseURI).then(() => {
        console.log('connected to db');
    }).catch(err =>{
        console.log('failed to connect',err.reason);
    });
}

module.exports = connectDB;
