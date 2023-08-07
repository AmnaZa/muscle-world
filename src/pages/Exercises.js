import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../Key/fetchData';
import API_KEY from '../Key/key';
import ExerciseCardGrid from '../components/ExerciseCardGrid';

function Exercises() {
  const { symbol } = useParams();
  const [bicepsExercises, setBicepsExercises] = useState([]);
  const [tricepsExercises, setTricepsExercises] = useState([]);
  const [glutesExercises, setGlutesExercises] = useState([]);

  useEffect(() => {
    const fetchBicepsData = async () => {
      try {
        const bicepsData = await fetchData('biceps', API_KEY);
        setBicepsExercises(bicepsData);
      } catch (error) {
        console.error('Error fetching biceps data:', error);
      }
    };

    const fetchTricepsData = async () => {
      try {
        const tricepsData = await fetchData('triceps', API_KEY);
        setTricepsExercises(tricepsData);
      } catch (error) {
        console.error('Error fetching triceps data:', error);
      }
    };

    const fetchGlutesData = async () => {
      try {
        const glutesData = await fetchData('glutes', API_KEY);
        setGlutesExercises(glutesData);
      } catch (error) {
        console.error('Error fetching glutes data:', error);
      }
    };

    fetchBicepsData();
    fetchTricepsData();
    fetchGlutesData();
  }, []);

  return (
    <div className="exercise-container">
      <h2>Biceps Exercises</h2>
      <ExerciseCardGrid exercises={bicepsExercises} />

      <h2>Triceps Exercises</h2>
      <ExerciseCardGrid exercises={tricepsExercises} />

      <h2>Glutes Exercises</h2>
      <ExerciseCardGrid exercises={glutesExercises} />
    </div>
  );
}

export default Exercises;
