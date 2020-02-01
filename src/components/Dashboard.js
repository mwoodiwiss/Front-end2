import React, {useState} from "react"
import Form from "./Dashform"
import WorkoutCard from "./WorkoutCard"
import {Div, Main} from './User/theme';
import styled from 'styled-components';

export default function Dashboard() {

    const [workout, setWorkout] = useState([])

    const addNewWorkout = work => {
      const newWorkout = {
        date: Date(),
        name: work.name,
        weight: work.weight,
        reps: work.reps,
        notes: work.notes
      };
      setWorkout([...workout, newWorkout]);
    };

    // const Body = styled.body`
    // background-color: #006494;
    // margin: 0;
    // padding: 0;
    // height: 200vh;
    // `;

    const FormDiv = styled.div`
      margin: auto;
      text-align: center;
      width: 800px;
      height: 400px;
      background: #ECA400;
      border-radius :60px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-top: 20px;
    `;

    const CardList = styled.div`
      background: #006494;
      margin: auto;
      margin-top: 20px;
      width: 80%;
      height: 800px;
      border-radius: 60px;
    `;
    
  
    return (
      <Div>
        <Main>
        <FormDiv>
          <Form addNewWorkout={addNewWorkout} />
        </FormDiv>
        </Main>
        <CardList>
          <WorkoutCard workout={workout} />
        </CardList>
      </Div>
    );
};