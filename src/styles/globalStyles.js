import styled, { createGlobalStyle, css } from 'styled-components';
import { colors } from './variables';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

 *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
 }
`;

export const Wrapper = styled.div`
  height: 100%;
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
    `};
  gap: ${(props) => (props.gap ? props.gap : '')};
  height: 100%;
  /* background-color: red; */
`;
