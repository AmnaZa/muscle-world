import React from 'react';
import ExerciseCard from './ExerciseCard';
import exerciseImage from '../Images/curls.jpeg';

const ExerciseCardGrid = ({ exercises }) => {
  return (
    <div className="exercise-card-grid-container">
      <div className="exercise-card-grid">
        {/* Map over the 'exercises' array and pass a unique 'key' prop to each ExerciseCard */}
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <div className="exercise-image" style={{ backgroundImage: `url(${exerciseImage})` }} />
    </div>
  );
};

export default ExerciseCardGrid;
