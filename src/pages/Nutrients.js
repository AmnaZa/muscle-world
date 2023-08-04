import styled from 'styled-components';
import nutrientsImage from '../Images/Nutrients.jpeg';

const NutrientsContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
`;

const NutrientsImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const NutrientsTitle = styled.h1`
  color: #7c52a0;
`;

const NutrientsList = styled.ul`
  padding: 0;
  list-style: none;
`;

const NutrientsItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NutrientHeading = styled.h3`
  color: #7c52a0;
  margin-bottom: 0.5rem;
`;

const NutrientBenefit = styled.p`
  margin: 0;
`;

function Nutrients() {
  return (
    <NutrientsContainer>
      <NutrientsTitle>Nutrients</NutrientsTitle>
      <NutrientsList>
        <NutrientHeading>Vitamin A</NutrientHeading>
        <NutrientsItem>Vitamin A: 1000 IU</NutrientsItem>
        <NutrientBenefit>Bananas are a good source of potassium, which helps regulate blood pressure.</NutrientBenefit>

        <NutrientHeading>Vitamin C</NutrientHeading>
        <NutrientsItem>Vitamin C: 50 mg</NutrientsItem>
        <NutrientBenefit>Salmon is rich in omega-3 fatty acids, which are beneficial for heart health.</NutrientBenefit>

        <NutrientHeading>Iron</NutrientHeading>
        <NutrientsItem>Iron: 10 mg</NutrientsItem>
        <NutrientBenefit>Spinach is a nutrient-dense green leafy vegetable that provides vitamins A, C, and K.</NutrientBenefit>

        <NutrientHeading>Calcium</NutrientHeading>
        <NutrientsItem>Calcium: 500 mg</NutrientsItem>
        <NutrientBenefit>Almonds are a great source of healthy fats, protein, and vitamin E.</NutrientBenefit>
      </NutrientsList>
      <NutrientsImage src={nutrientsImage} alt="Nutrients" /> {/* Add the image here */}
    </NutrientsContainer>
  );
}

export default Nutrients;
