import React from 'react';
import styled from 'styled-components';

interface IPropsButton {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface IStyledPropsButton {
  theme: string;
}

const StyledButton = styled.button<IStyledPropsButton>`
  padding: 20px;
  font-size: 22px;
  color: white;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.MyButton.css.backgroundColor};
`;

export const MyButton = ({ text, onClick }: IPropsButton) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);
