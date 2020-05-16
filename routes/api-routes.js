const router = require("express").Router();
const Workout = require("../models/workout");


router.get("/api/workouts", (req, res) => { 
    Workout.find({})
    .then(dbWorkout => {
        // console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
});

router.post("/api/workouts", (req, res) => {
    console.log("post hit")
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises : body}},
        { new: true, runValidators: true}
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(400).json(err);
    })

})

module.exports = router;