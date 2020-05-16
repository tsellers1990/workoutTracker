const mongoose = require("mongoose"); ////We're using this when we want to add a new workout to the DB

const Schema = mongoose.Schema;



const workoutSchema = new Schema(
    {

        day : {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "Please enter an exercise duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance:  {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true ///I really dont understand what this line is doing~~~
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;