import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../Key/fetchData';
import API_KEY from '../Key/key';

function Exercises() {
  const { symbol } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const muscle = 'biceps';
    
    fetchData(muscle, API_KEY) // Use the imported API_KEY variable
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Render your home page content */}
      {exercises.map((exercise, key) => (
        <div key={key}>
          <h3>{exercise.name}</h3>
          <div>Equipment: {exercise.equipment}</div>
          <div>Instructions: {exercise.instructions}</div>
          <div>Type: {exercise.type}</div>
          <div>muscle: {exercise.muscle}</div>
          <div>difficulty: {exercise.difficulty}</div>
        </div>
      ))}
    </div>
  );
}

export default Exercises;
