
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tested1', {
          
        });
         console.log('Mondodb connected successfully');
    } catch (error){
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

