import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../Key/fetchData';
import API_KEY from '../Key/key';
import ExerciseCardGrid from '../components/ExerciseCardGrid'; // Import the ExerciseCardGrid component

function Exercises() {
  const { symbol } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const muscle = 'biceps';

    fetchData(muscle, API_KEY)
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="exercise-container">
      {/* Render your home page content */}
      <ExerciseCardGrid exercises={exercises} />
    </div>
  );
}

export default Exercises;
