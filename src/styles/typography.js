import styled, { css } from 'styled-components';
import { colors } from './variables';

export const Title = styled.h2`
  color: ${colors.marianeBlue};
`;

export const Paragraph = styled.p`
  color: ${(props) => (props.color ? props.color : `${colors.coolGray}`)};
  font-size: 0.9rem;

  &.active {
    color: ${colors.marianeBlue};
  }

  ${(props) =>
    props.error &&
    css`
      color: ${colors.strawberryRed};
    `}

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.upper &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 80%;
    `}

    ${(props) =>
    props.medium &&
    css`
      font-size: 110%;
    `}

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => (props.active ? `${colors.marianeBlue}` : '')};
    `}
`;
