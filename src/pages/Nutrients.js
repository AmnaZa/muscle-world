// Import necessary dependencies
import React from 'react';
import styled from 'styled-components'; // Import the styled-components library
import nutrientsImage from '../Images/Nutrients.jpeg'; // Import the image for the nutrients section

// Create a styled component 'NutrientsContainer' for the nutrients section container
const NutrientsContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
`;

// Create a styled component 'NutrientsImage' for the nutrients section image
const NutrientsImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

// Create a styled component 'NutrientsTitle' for the nutrients section title
const NutrientsTitle = styled.h1`
  color: #7c52a0;
`;

// Create a styled component 'NutrientsList' for the nutrients list
const NutrientsList = styled.ul`
  padding: 0;
  list-style: none;
`;

// Create a styled component 'NutrientsItem' for the individual nutrient item
const NutrientsItem = styled.li`
  margin-bottom: 0.5rem;
`;

// Create a styled component 'NutrientHeading' for the nutrient heading
const NutrientHeading = styled.h3`
  color: #7c52a0;
  margin-bottom: 0.5rem;
`;

// Create a styled component 'NutrientBenefit' for the nutrient benefit text
const NutrientBenefit = styled.p`
  margin: 0;
`;

// Create the functional component 'Nutrients'
function Nutrients() {
  // Render the 'Nutrients' component
  return (
    <NutrientsContainer>
      {/* Display the nutrients section title */}
      <NutrientsTitle>Nutrients</NutrientsTitle>

      {/* Display the nutrients list */}
      <NutrientsList>
        {/* Display the first nutrient and its details */}
        <NutrientHeading>Vitamin A</NutrientHeading>
        <NutrientsItem>Vitamin A: 1000 IU</NutrientsItem>
        <NutrientBenefit>Bananas are a good source of potassium, which helps regulate blood pressure.</NutrientBenefit>

        {/* Display the second nutrient and its details */}
        <NutrientHeading>Vitamin C</NutrientHeading>
        <NutrientsItem>Vitamin C: 50 mg</NutrientsItem>
        <NutrientBenefit>Salmon is rich in omega-3 fatty acids, which are beneficial for heart health.</NutrientBenefit>

        {/* Display the third nutrient and its details */}
        <NutrientHeading>Iron</NutrientHeading>
        <NutrientsItem>Iron: 10 mg</NutrientsItem>
        <NutrientBenefit>Spinach is a nutrient-dense green leafy vegetable that provides vitamins A, C, and K.</NutrientBenefit>

        {/* Display the fourth nutrient and its details */}
        <NutrientHeading>Calcium</NutrientHeading>
        <NutrientsItem>Calcium: 500 mg</NutrientsItem>
        <NutrientBenefit>Almonds are a great source of healthy fats, protein, and vitamin E.</NutrientBenefit>
      </NutrientsList>

      {/* Display the nutrients section image */}
      <NutrientsImage src={nutrientsImage} alt="Nutrients" />
    </NutrientsContainer>
  );
}

// Export the 'Nutrients' component as the default export
export default Nutrients;
