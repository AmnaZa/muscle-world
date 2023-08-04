import styled from 'styled-components';

const AboutContainer = styled.div`
 
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const AboutTitle = styled.h1`

  color: #7c52a0;
`;


function About() {
  return (
    <AboutContainer>
      <AboutTitle>About</AboutTitle>
      <p>Welcome to our fitness website! Here at FitnessHub, we are passionate about promoting a healthy and active lifestyle. We believe that regular exercises are essential for maintaining good physical and mental well-being. Whether you are a fitness enthusiast or just starting your fitness journey, we have a wide range of exercises and workout routines tailored to meet your needs. Stay motivated, stay active, and enjoy the journey to a fitter and healthier you!</p>
      </AboutContainer>
  );
}

export default About;