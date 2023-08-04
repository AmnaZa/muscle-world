import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/logo.jpeg';

const NavbarContainer = styled.header`
  background-color: #7c52a0;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;

`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: white;
`;

const NavLinks = styled.nav`
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
  }

  li {
    margin-left: 1.5rem;
    transition: transform 0.2s ease-in-out;
  }

  li:hover {
    transform: translateY(-3px);
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.2s ease-in-out, font-style 0.2s ease-in-out;
  }

  a:hover {
    color: black;
    font-style: italic;
  }

  /* Adjust the style of h2 when not hovering over the links */
  li:not(:hover) a ~ h2 {
    font-style: normal;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoLink to="/">
        <LogoImage src={logo} alt="Logo" />
        <HeadingContainer>
          <Heading1>Fitness Hub</Heading1>
          <Heading2>Make yourself proud</Heading2>
        </HeadingContainer>
      </LogoLink>
      <NavLinks>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exercise">Exercises</Link></li>
          <li><Link to="/nutrients">Nutrients</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
