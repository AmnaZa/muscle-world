import React, { useEffect, useState } from 'react';
import fetchData from '../Key/fetchData';

function Home() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const muscle = 'biceps';
    
    fetchData(muscle, apiKey)
      .then((body) => {
        const data = JSON.parse(body);
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
          {/* Add other exercise details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Home;
