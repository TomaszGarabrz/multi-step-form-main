import styled, { css } from 'styled-components';
import { colors } from './variables';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Button = styled.button`
  ${(props) =>
    props.bottomRight &&
    css`
      display: inline-block;
      align-self: flex-end;
      margin-top: auto;
    `}

  background-color: ${colors.marianeBlue};
  padding: 0.75rem 1.5rem;
  color: ${colors.white};
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;

  ${(props) =>
    props.gray &&
    css`
      display: inline-block;
      align-self: flex-end;
      margin-top: auto;
      background: none;
      color: ${colors.coolGray};
      border: none;
      font-weight: bold;
    `}
`;

export const InputsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
`;
