import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${ props => props.theme.yellow };
  color: ${ props => props.theme.black };
  padding: 10px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px

  &:hover {
    background-color: #fff070;
`;

const Button = ({ children }) => {
  return (
      <StyledButton
        type="submit"
      >
        { children }
      </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Button;
