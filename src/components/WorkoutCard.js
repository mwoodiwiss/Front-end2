import React from "react";
import styled from 'styled-components';

const WorkoutCard = props => {
    const CardContainer = styled.div`
        background: white;
        width: 200px;
        height: 350px;
        border-radius: 60px;
        margin: 20px;
    `;

    const Container = styled.div`
        display: flex;
        justify-content: left;
        flex-wrap: wrap; 
        width: 100%;
        height: 300px
    `;

  return (
    <Container>
      {props.workout.map(workout => (
        <CardContainer key={workout.name}>
          <h1>{workout.date}</h1>
          <h2>{workout.name}</h2>
          <p>Weight: {workout.weight}</p>
          <p>Reps: {workout.reps}</p>
          <p>Notes: {workout.notes}</p>
        </CardContainer>
      ))}
    </Container>
  );
};

export default WorkoutCard;