import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../assets/img/concert.jpg';


const StyledHeader = styled.header`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: url(${BackgroundImg}) rgba(0,0,0,0.2) no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
`;

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;


`
const Title = styled.h1`
  z-index: 2;
  text-align: center;

`;


const SubTitle = styled.h2`
  z-index: 2;
  text-align: center;
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