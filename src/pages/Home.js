import React, { useEffect, useState } from 'react';
import fetchData from '../Key/fetchData';

function Home() {
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
      {exercises.map((exercise) => (
        <div key={exercise.id}>
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

export default Home;
