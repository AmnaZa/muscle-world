import React from 'react';

const nutritionFacts = [
  "Bananas are a good source of potassium, which helps regulate blood pressure.",
  "Salmon is rich in omega-3 fatty acids, which are beneficial for heart health.",
  "Spinach is a nutrient-dense green leafy vegetable that provides vitamins A, C, and K.",
  "Almonds are a great source of healthy fats, protein, and vitamin E.",
  "Greek yogurt is high in protein and probiotics, promoting gut health.",
];

function Nutrients() {
  return (
    <div>
      <h1>Nutrients</h1>
      <h3>Interesting Nutrition Facts</h3>
      <ul>
        {nutritionFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Nutrients;
