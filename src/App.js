import React, { useState, useContext } from "react";
import {Route} from 'react-router-dom';
import axios from "axios";
import "./App.css";
import Welcome from './components/User/WelcomePage';
import GuestLogin from './components/User/GuestLogin';
import GuestRegister from './components/User/GuestRegister';
// Contexts
import { WorkOutContext } from "./contexts/WorkOutContext";
import { ExcerciseContext } from "./contexts/ExcerciseContext";
import Dashboard from "./components/Dashboard";

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
        <Route exact path='/' component={Welcome}/>
        <Route path='/login' component={GuestLogin}/>
        <Route path='/register' component={GuestRegister}/>
        <Route path='/dashboard' component={Dashboard}/>
          <header>
            <p>Workout Notes: {wrkout1.notes}</p>
            <p>Workout Date: {wrkout1.date}</p>
            <p>Excercise Name: {excrcse1.name}</p>
            <p>Excercise Reps: {excrcse1.reps}</p>
            <p>Excercise Weight: {excrcse1.weight}</p>
          </header> 
      </ExcerciseContext.Provider>
    </WorkOutContext.Provider>
  )
}

export default App;
