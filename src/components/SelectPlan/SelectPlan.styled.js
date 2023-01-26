import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const SelectPlanForm = styled.ul`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  gap: 1rem;
  position: relative;
`;
export const SelectPlanCheckboxList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
  justify-content: space-between;
`;
export const CheckboxItem = styled.li`
  border: 1px solid ${colors.coolGray};
  border-radius: 15px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  cursor: pointer;
  position: relative;

  &.active {
    border: 1px solid ${colors.marianeBlue};
    background-color: ${colors.magnolia};
  }

  img {
    width: 40px;
  }
`;

export const Input = styled.input`
  border: 1px solid red;
  height: 100%;
  width: 100%;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .content__text {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
`;

export const SlectPlanCheckBoxSwitchWrapper = styled.div`
  margin-top: 1rem;
  background-color: ${colors.magnolia};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem;
  border-radius: 10px;
`;
export const Label = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const CustomInputWrapper = styled.div`
  position: relative;
  width: 50px;
`;
export const SwitchCustomInput = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${colors.marianeBlue};
  position: absolute;
  bottom: -10%;
  opacity: 1;
  border-radius: 20px;
  padding: 0.2rem;
  cursor: pointer;

  .bullet {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${colors.white};

    &.active {
      left: 5px;
    }
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const SwitchChecbox = styled.input``;

export const ErrorWrapper = styled.div`
  position: absolute;
  bottom: -1.75rem;
  width: 100%;
`;
