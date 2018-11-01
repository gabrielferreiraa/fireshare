import React from 'react';
import styled from 'styled-components';
import global from 'tools/global';

const StyledButton = styled.button`
  height: 65px;
  font-family: ${global.font.medium};
  padding: 5px 25px 5px 25px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  border-radius: 5px;
  border: none;
  margin: ${props => (props.center ? '5px auto' : '0 5px 0 5px')};
  background-color: ${global.colors.secondary};
  color: #fff;
  cursor: pointer;
  border: 2px solid ${global.colors.secondary};
  transition: background-color 200ms, transform 200ms, border-color 200ms ease;
  will-change: background-color, transform, border-color;

  &:hover {
    border-color: #fff;
    background-color: transparent;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
