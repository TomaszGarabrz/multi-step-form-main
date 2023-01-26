import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  color: ${colors.marianeBlue};
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${colors.coolGray};
  padding: 0.5rem;
  border-color: ${(props) => (props.error ? `${colors.strawberryRed}` : '')};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.error {
    border-color: ${colors.strawberryRed};
  }
`;

export const MessagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled.p``;
