import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import the 'useParams' hook
import fetchData from '../Key/fetchData';

function Exercises() {
  const { symbol } = useParams(); // Use the 'useParams' hook to get the symbol from the URL
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const muscle = 'biceps';
    
    fetchData(muscle, 'FJFpRD4M+a4ZukKbzMQW+A==EVZhMv1fEZTMuJ7V')
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
