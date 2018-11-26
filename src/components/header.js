import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../assets/img/concert.jpg';


const StyledHeader = styled.header`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: url(${BackgroundImg}) rgba(0,0,0,0.2) no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 20px;
`;

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;


`
const Title = styled.h1`
  z-index: 2;
  text-align: center;
  font-size: 6.854em;
  font-family: 'Gloria Hallelujah', sans-serif !important;
  text-shadow: 2px 2px 3px #ffc601;

`;


const SubTitle = styled.h2`
  z-index: 2;
  text-align: center;
  font-size: 2.618em;
  font-family: 'Roboto', sans-serif !important;
`;



const Header = ({siteTitle}) => {
  return (
    <div>
    <StyledHeader>
      <Content>
        <Title>{siteTitle}</Title>
        <SubTitle>Vos Evenements de St Tropez a Monaco</SubTitle>
      </Content>
    </StyledHeader>
    </div>
  );
};

export default Header;