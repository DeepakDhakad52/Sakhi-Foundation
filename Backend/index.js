const express = require("express");
const dbConnect = require("./dbConnection/dbConnection");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const infoModel = require("./models/infoModels")

dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("send working")
})

app.post("/sakhi", async(req, res) => {
    console.log(req.body);

    try{
        const {name, email, phone, gender, state, village, subject} = req.body;
        const requiredDetails = await infoModel.create({
            name, email, phone, gender, state, village, subject
        })
        res.json({
            success:true,
            message:"Succeffully submitted"
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"Some error occured"
        })
    }
})

app.listen(5000, () => {
    console.log("Server is listening at 5000")
})