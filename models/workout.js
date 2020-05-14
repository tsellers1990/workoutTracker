const mongoose = require("mongoose"); ////We're using this when we want to add a new workout to the DB

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        default: "Other"
    },
    duration: {
        type: Number,
        required: "Enter a duration of time"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;