import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseCardGrid = ({ exercises, imageSrc }) => {
  return (
    <div className="exercise-card-grid-container">
      <div className="exercise-card-grid">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      {/* Display the exercise image using the provided 'imageSrc' */}
      <div className="exercise-image" style={{ backgroundImage: `url(${imageSrc})` }} />
    </div>
  );
};

export default ExerciseCardGrid;
