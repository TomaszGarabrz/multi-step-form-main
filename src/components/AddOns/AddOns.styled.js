import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const AddOnsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckboxWrapper = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  border-color: ${colors.marianeBlue};

  &.active {
    background-color: ${colors.magnolia};
  }
`;
export const Label = styled.label`
  display: flex;
  gap: 1rem;
  position: relative;
`;
export const Input = styled.input`
  margin-left: 1rem;
  width: 25px;
`;

export const CustomInput = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.75rem;
  opacity: 0.2;
`;

export const CheckboxContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1rem;
`;
export const InfoWrapper = styled.div`
  margin-right: auto;
`;
