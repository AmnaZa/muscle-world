import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../Key/fetchData';
import API_KEY from '../Key/key';
import ExerciseCardGrid from '../components/ExerciseCardGrid';

import bicepsImage from '../Images/curls.jpeg';
import tricepsImage from '../Images/Triceps.png';
import glutesImage from '../Images/glutes.jpeg';
import abdominalsImage from '../Images/abdo.jpeg';
import abductorsImage from '../Images/abs.jpeg';
import adductorsImage from '../Images/ads.jpeg';
import calvesImage from '../Images/calves.jpeg';
import chestImage from '../Images/chest.jpeg';
import forearmsImage from '../Images/fore.jpeg';

function Exercises() {
  const { symbol } = useParams();
  const [bicepsExercises, setBicepsExercises] = useState([]);
  const [tricepsExercises, setTricepsExercises] = useState([]);
  const [glutesExercises, setGlutesExercises] = useState([]);
  const [abdominalsExercises, setAbdominalsExercises] = useState([]);
  const [abductorsExercises, setAbductorsExercises] = useState([]);
  const [adductorsExercises, setAdductorsExercises] = useState([]);
  const [calvesExercises, setCalvesExercises] = useState([]);
  const [chestExercises, setChestExercises] = useState([]);
  const [forearmsExercises, setForearmsExercises] = useState([]);

  useEffect(() => {
    const fetchDataForMuscleGroup = async (muscleGroup, setterFunction) => {
      try {
        const data = await fetchData(muscleGroup, API_KEY);
        setterFunction(data);
      } catch (error) {
        console.error(`Error fetching ${muscleGroup} data:`, error);
      }
    };

    fetchDataForMuscleGroup('biceps', setBicepsExercises);
    fetchDataForMuscleGroup('triceps', setTricepsExercises);
    fetchDataForMuscleGroup('glutes', setGlutesExercises);
    fetchDataForMuscleGroup('abdominals', setAbdominalsExercises);
    fetchDataForMuscleGroup('abductors', setAbductorsExercises);
    fetchDataForMuscleGroup('adductors', setAdductorsExercises);
    fetchDataForMuscleGroup('calves', setCalvesExercises);
    fetchDataForMuscleGroup('chest', setChestExercises);
    fetchDataForMuscleGroup('forearms', setForearmsExercises);
  }, []);

  return (
    <div className="exercise-container">
      <h2>Biceps Exercises</h2>
      <ExerciseCardGrid exercises={bicepsExercises} imageSrc={bicepsImage} />

      <h2>Triceps Exercises</h2>
      <ExerciseCardGrid exercises={tricepsExercises} imageSrc={tricepsImage} />

      <h2>Glutes Exercises</h2>
      <ExerciseCardGrid exercises={glutesExercises} imageSrc={glutesImage} />

      <h2>Abdominals Exercises</h2>
      <ExerciseCardGrid exercises={abdominalsExercises} imageSrc={abdominalsImage} />

      <h2>Abductors Exercises</h2>
      <ExerciseCardGrid exercises={abductorsExercises} imageSrc={abductorsImage} />

      <h2>Adductors Exercises</h2>
      <ExerciseCardGrid exercises={adductorsExercises} imageSrc={adductorsImage} />

      <h2>Calves Exercises</h2>
      <ExerciseCardGrid exercises={calvesExercises} imageSrc={calvesImage} />

      <h2>Chest Exercises</h2>
      <ExerciseCardGrid exercises={chestExercises} imageSrc={chestImage} />

      <h2>Forearms Exercises</h2>
      <ExerciseCardGrid exercises={forearmsExercises} imageSrc={forearmsImage} />
    </div>
  );
}

export default Exercises;
