import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import the 'useParams' hook
import fetchData from '../Key/fetchData';

function Exercises() {
  const { symbol } = useParams(); // Use the 'useParams' hook to get the symbol from the URL
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const apiKey = 'FJFpRD4M+a4ZukKbzMQW+A==EVZhMv1fEZTMuJ7V'; 

    fetchData(symbol, apiKey)
      .then((body) => {
        const data = JSON.parse(body);
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [symbol]);

  return (
    <div>
      {/* Render your exercises page content */}
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h3>{exercise.name}</h3>
          {/* Add other exercise details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Exercises;
