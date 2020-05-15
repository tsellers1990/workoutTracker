const mongoose = require("mongoose"); ////We're using this when we want to add a new workout to the DB

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        default: "resistance"
    },
    name: {
        type: String,
        trim: true,
        default: "squats"
    },
    duration: {
        type: Number,
        default: 10
    },
    weight: {
        type: Number,
        default: 225
    },
    reps: {
        type: Number,
        default: 2
    },
    sets: {
        type: Number,
        default: 5
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;