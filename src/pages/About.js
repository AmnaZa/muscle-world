// Import necessary dependencies
import styled from 'styled-components'; // Import the styled-components library
import aboutImage from '../Images/gym.jpeg'; // Import the about image

// Create a styled component 'AboutContainer' for the about section
const AboutContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
`;

// Create a styled component 'AboutTitle' for the heading of the about section
const AboutTitle = styled.h1`
  color: #7c52a0;
`;

// Create a styled component 'AboutImage' for the image in the about section
const AboutImage = styled.img`
  width: 50%;
  border-radius: 5px;
  display: block; /* Ensures the image is treated as a block element */
  margin: 0 auto; /* Centers the image horizontally within its container */
`;

// Create a styled component 'AboutText' for the paragraph in the about section
const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

// Create the functional component 'About'
function About() {
  // Render the 'About' component
  return (
    <AboutContainer>
      {/* Display the title for the about section */}
      <AboutTitle>About</AboutTitle>
      {/* Display the image in the about section */}
      <AboutImage src={aboutImage} alt="About" />
      {/* Display the text for the about section */}
      <AboutText>
        Welcome to our fitness website! Here at FitnessHub, we are passionate about promoting a healthy and active lifestyle. We believe that regular exercises are essential for maintaining good physical and mental well-being. Whether you are a fitness enthusiast or just starting your fitness journey, we have a wide range of exercises and workout routines tailored to meet your needs. Stay motivated, stay active, and enjoy the journey to a fitter and healthier you!
      </AboutText>
    </AboutContainer>
  );
}

// Export the 'About' component as the default export
export default About;
