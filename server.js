const express = require ("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {useNewUrlParser: true});

db.Workouts.create({name: "whateverthefuckyouwant"})
    .then(dbLibrary => {
        console.log(dbLibrary)
    })
    .catch(err => {
        res.json(err)
    });


//app post route
app.post("/submit", ({body}), res) => {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { excercises: body} }, {new: true}))
    .then(excercise => {
        res.json(excercise)
    })
    .catch(err => {
        res.json(err);
    });
};


//app get route/s


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})