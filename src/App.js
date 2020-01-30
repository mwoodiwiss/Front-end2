import React, { useState, useContext } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
// Contexts
import { WorkOutContext } from "./contexts/WorkOutContext";
import { ExcerciseContext } from "./contexts/ExcerciseContext";

function App() {
  const [workOut, setWorkOut] = useState({});
  const [excercise, setExcercise] = useState({});

  const addWorkout = (id, item) => {
    axios
      .post("https://workout-journal-backend.herokuapp.com/api/workouts", item)
      .then(response => {
        setWorkOut(response.data);
      })
      .catch(err => console.log(err));
  };

  const addExcercise = (id, item) => {
    axios
      .post(
        "https://workout-journal-backend.herokuapp.com/api/workout/excercise",
        item
      )
      .then(response => {
        setExcercise(response.data);
      })
      .catch(err => console.log(err));
  };
  const excrcse1 = useContext(ExcerciseContext);
  const wrkout1 = useContext(WorkOutContext);

  return (
    <WorkOutContext.Provider value={{ workOut, addWorkout }}>
      <ExcerciseContext.Provider value={{ excercise, addExcercise }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Workout Notes: {wrkout1.notes}</p>
            <p>Workout Date: {wrkout1.date}</p>
            <p>Excercise Name: {excrcse1.name}</p>
            <p>Excercise Reps: {excrcse1.reps}</p>
            <p>Excercise Weight: {excrcse1.weight}</p>
          </header>
        </div>
      </ExcerciseContext.Provider>
    </WorkOutContext.Provider>
  );
}

export default App;
