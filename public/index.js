init();

async function init() {
  if (location.search.split("=")[1] === undefined) { //test to see if there is any workouts given to the front end yet
    const workout = await API.getLastWorkout();
    if (workout) {//if there is a workout in the Database
      location.search = "?id=" + workout._id; //this is setting the id as a query inside of the url. most recent id is in the url
    } else {//if there is not any workouts in the DB
      document.querySelector("#continue-btn").classList.add("d-none") //show the new workout button
    }
  }
}

