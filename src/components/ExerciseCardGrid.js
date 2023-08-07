// ExerciseCardGrid.js
import React from 'react';
import ExerciseCard from './ExerciseCard'; // Import the ExerciseCard component
import exerciseImage from '../Images/curls.jpeg';


const ExerciseCardGrid = ({ exercises }) => {
  return (
    <div className="exercise-card-grid-container">
      <div className="exercise-card-grid">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <div className="exercise-image" style={{ backgroundImage: `url(${exerciseImage})` }} />
    </div>
  );
};

export default ExerciseCardGrid;