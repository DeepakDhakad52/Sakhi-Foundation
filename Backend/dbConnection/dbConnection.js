const mongoose = require("mongoose");
// const {DB_URL} = require("../src/helpers/env.js");

const url = `mongodb+srv://puneet:puneet04@cluster0.wsqgwtz.mongodb.net/infoModel?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
const dbConnect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Mongo Connection Successful");
        })
        .catch((err) => {
            console.log("Db not connected", err);
        });
}

module.exports = dbConnect;