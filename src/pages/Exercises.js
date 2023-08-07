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
      <ExerciseCardGrid exercises={bicepsExercises} />

      <h2>Triceps Exercises</h2>
      <ExerciseCardGrid exercises={tricepsExercises} />

      <h2>Glutes Exercises</h2>
      <ExerciseCardGrid exercises={glutesExercises} />

      <h2>Abdominals Exercises</h2>
      <ExerciseCardGrid exercises={abdominalsExercises} />

      <h2>Abductors Exercises</h2>
      <ExerciseCardGrid exercises={abductorsExercises} />

      <h2>Adductors Exercises</h2>
      <ExerciseCardGrid exercises={adductorsExercises} />

      <h2>Calves Exercises</h2>
      <ExerciseCardGrid exercises={calvesExercises} />

      <h2>Chest Exercises</h2>
      <ExerciseCardGrid exercises={chestExercises} />

      <h2>Forearms Exercises</h2>
      <ExerciseCardGrid exercises={forearmsExercises} />
    </div>
  );
}

export default Exercises;
