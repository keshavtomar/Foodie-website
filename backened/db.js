require('dotenv').config();

const mongoose = require('mongoose');
const password = process.env.PASSWORD;

const mongoURI = 'mongodb+srv://keshavtomar:' + password + '@cluster0.ibzyjol.mongodb.net/Foodie?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err) => {
        if (err) {
            console.log("Database connection failed with following error");
            console.log(err);
        }
        else {
            console.log("Database connection successfull");

            const fetched_data = mongoose.connection.db.collection("sample");
            fetched_data.find({}).toArray(function (err, result) {
                if (err) console.log(err);
                else console.log();
            });
        }
    });
}

module.exports = mongoDB;