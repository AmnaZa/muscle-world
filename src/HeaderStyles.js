import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* Navbar */
  background-color: #7c52a0;
  color: #fff;
  padding: 1rem 2rem;

  h1 {
    color: tomato;
    font-size: 1.5rem;
  }

  img {
    width: 80px;
    height: auto;
    display: block;
    margin-right: 1rem;
  }

  nav ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  nav ul li a:hover {
    background-color: #9d6bc6;
    border-radius: 5px;
  }
`;
