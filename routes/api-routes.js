const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
})

router.get("/api/workouts", (req, res) => { //so this is going to the workout.js model file.  How do I go to the db to get the info?
    Workout.find({})
    .sort({ date: -1})//I think if I sort by date dec it should show correctly
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

module.exports = router;