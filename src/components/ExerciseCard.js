// Import necessary dependencies
import React, { useState } from 'react';

// Create a functional component ExerciseCard that takes 'exercise' as a prop
const ExerciseCard = ({ exercise }) => {
  // Initialize a state variable 'showDetails' and a function 'setShowDetails' using useState
  const [showDetails, setShowDetails] = useState(false);

  // Define a function 'handleCardClick' to toggle the 'showDetails' state
  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  // Render the ExerciseCard component
  return (
    <div
      // Apply the 'exercise-card' class to the div, and 'selected' class if 'showDetails' is true
      className={`exercise-card ${showDetails ? 'selected' : ''}`}
      // Attach the 'handleCardClick' function to the click event of the div
      onClick={handleCardClick}
    >
      {/* Display the name of the exercise */}
      <h3 className="exercise-name">{exercise.name}</h3>
      {/* Show the exercise details only when 'showDetails' is true */}
      {showDetails && (
        <div className="exercise-details">
          {/* Display the exercise instructions */}
          <p>Instructions: {exercise.instructions}</p>
          {/* Display the type of exercise */}
          <p>Type: {exercise.type}</p>
          {/* Display the targeted muscle group */}
          <p>Muscle: {exercise.muscle}</p>
          {/* Display the difficulty level of the exercise */}
          <p>Difficulty: {exercise.difficulty}</p>
          {/* Add more details here */}
          
          {/* Add a 'Close' button to hide the details when clicked */}
          <button className="close-btn" onClick={handleCardClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

// Export the ExerciseCard component as the default export
export default ExerciseCard;
