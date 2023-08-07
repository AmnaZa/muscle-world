// ExerciseCard.js
import React, { useState } from 'react';

const ExerciseCard = ({ exercise }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={`exercise-card ${showDetails ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h3 className="exercise-name">{exercise.name}</h3>
      {showDetails && (
        <div className="exercise-details">
          <p>Instructions: {exercise.instructions}</p>
          <p>Type: {exercise.type}</p>
          <p>Muscle: {exercise.muscle}</p>
          <p>Difficulty: {exercise.difficulty}</p>
          {/* Add more details here */}
          <button className="close-btn" onClick={handleCardClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
