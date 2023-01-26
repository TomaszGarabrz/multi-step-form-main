import { useState } from 'react';

import InfoForm from './InfoForm/InfoForm';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import Sidebar from './Sidebar/Sidebar';
import SelectPlan from './SelectPlan/SelectPlan';
import { useFormContext } from '../context/FormContext';
import AddOns from './AddOns/AddOns';
import FinishingUp from './FinishingUp/FinishingUp';
import ThankYou from './ThankYou/ThankYou';
const pages = [
  <InfoForm />,
  <SelectPlan />,
  <AddOns />,
  <FinishingUp />,
  <ThankYou />,
];

const Root = () => {
  const { showSlide, handleForm } = useFormContext();

  return (
    <Wrapper>
      <FormWrapper>
        <Sidebar />
        <StepsWrapper>
          <form style={{ height: '100%' }} onSubmit={handleForm}>
            {pages[showSlide]}
          </form>
        </StepsWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default Root;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.alabaster};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: ${colors.white};
  width: 900px;
  height: 550px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem;

  display: grid;
  grid-template-columns: 30% 70%;
`;

export const StepsWrapper = styled.div`
  padding: 2rem 5rem;
  height: 100%;
`;
