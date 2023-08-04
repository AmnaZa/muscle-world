import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../Images/banner1.jpg';
import banner2 from '../Images/banner2.png';
import banner3 from '../Images/banner3.jpeg';
import banner4 from '../Images/banner4.jpeg';
import banner5 from '../Images/banner5.jpeg';

const HomePageContainer = styled.div`
  padding: 2rem;
`;

const WelcomeHeading = styled.h1`
  color: #7c52a0;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const WelcomeText = styled.p`
  line-height: 1.6;
`;

const ImageCarouselContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  max-height: 500px;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FitnessInfo = styled.p`
  margin-top: 2rem;
  line-height: 1.6;
`;

function Home() {
  return (
    <HomePageContainer>
      <WelcomeHeading>Welcome to our Fitness App!</WelcomeHeading>
      <WelcomeText>
        Our fitness app is designed to help you achieve your fitness goals and lead a healthy lifestyle.
        With a wide range of exercises and valuable information about nutrients, you can tailor your
        fitness routine and diet to suit your needs. Stay motivated and track your progress as you
        work towards becoming a healthier and fitter version of yourself.
      </WelcomeText>
      <ImageCarouselContainer>
        <Carousel showThumbs={false} showStatus={false} autoPlay>
          <div>
            <CarouselImage src={banner1} alt="Banner 1" />
          </div>
          <div>
            <CarouselImage src={banner2} alt="Banner 2" />
          </div>
          <div>
            <CarouselImage src={banner3} alt="Banner 3" />
          </div>
          <div>
            <CarouselImage src={banner4} alt="Banner 4" />
          </div>
          <div>
            <CarouselImage src={banner5} alt="Banner 5" />
          </div>
        </Carousel>
      </ImageCarouselContainer>
      <FitnessInfo>
        Fitness is not just about hitting the gym, it's a lifestyle! Incorporating regular exercise
        and a balanced diet can have a profound impact on your overall well-being. Whether you're
        looking to build strength, improve flexibility, or enhance cardiovascular health, our fitness
        app has a wide variety of exercises to meet your needs. Remember, small consistent steps towards
        your fitness goals can lead to significant results. Stay committed, stay motivated, and make
        fitness a part of your daily routine. Let's embark on this journey together towards a healthier,
        happier you!
      </FitnessInfo>
    </HomePageContainer>
  );
}

export default Home;