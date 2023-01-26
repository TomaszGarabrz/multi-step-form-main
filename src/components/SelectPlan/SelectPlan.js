import React, { useState, useEffect } from 'react';

import { Button } from '../../styles/components';
import { Wrapper } from '../../styles/globalStyles';
import { Paragraph, Title } from '../../styles/typography';

import {
  SelectPlanForm,
  CheckboxItem,
  SlectPlanCheckBoxSwitchWrapper,
  Input,
  Label,
  CheckboxContentWrapper,
  SwitchInput,
  SwitchCustomInput,
  CustomInputWrapper,
  ButtonsWrapper,
  ErrorWrapper,
} from './SelectPlan.styled';

import arcadeIcon from '../../images/icon-arcade.svg';
import advanceIcon from '../../images/icon-advanced.svg';
import proIcon from '../../images/icon-pro.svg';

import { colors } from '../../styles/variables';

import { useFormContext } from '../../context/FormContext';

const SelectPlan = () => {
  const [error, setError] = useState({});

  const {
    setShowSlide,
    setIsChecked,
    isChecked,
    setFormValues,
    formValues,
    setValidPage,
    validPage,
  } = useFormContext();

  console.log(formValues.plan.name);

  const handleValidate = () => {
    if (!formValues.plan.name) {
      setError({
        ...error,
        plan: 'You need to choose any item',
      });
    } else {
      setValidPage({
        ...validPage,
        page: 2,
      });
      setShowSlide(2);
    }
  };

  const handleChange = (e) => {
    const { id, size } = e.target;

    setFormValues({
      ...formValues,
      plan: {
        ...formValues.plan,
        name: id,
        price: size,
      },
    });
  };

  useEffect(() => {
    setFormValues({
      ...formValues,
      plan: {
        ...formValues.plan,
        time: isChecked ? 'monthly' : 'yearly',
      },
    });
  }, [isChecked]);

  console.log(formValues.plan);

  return (
    <Wrapper flex gap="0.5rem">
      <Title>Select your plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>

      <SelectPlanForm>
        <CheckboxItem
          className={`form__plans__inputWrapper ${
            formValues.plan.name === 'arcade' ? 'active' : ''
          }`}
        >
          <CheckboxContentWrapper>
            <img src={arcadeIcon} alt="" />
            <div className="content__text">
              <Paragraph medium bold color={colors.marianeBlue}>
                Arcade
              </Paragraph>
              <Paragraph>$90/yr</Paragraph>
              <Paragraph small bold color={colors.marianeBlue}>
                2 months free
              </Paragraph>
            </div>
          </CheckboxContentWrapper>
          <Input
            onChange={handleChange}
            type="radio"
            name="plan"
            id="arcade"
            size="90"
            value={formValues.plan.name}
          />
        </CheckboxItem>
        <CheckboxItem
          className={`form__plans__inputWrapper ${
            formValues.plan.name === 'advance' ? 'active' : ''
          }`}
        >
          <CheckboxContentWrapper>
            <img src={advanceIcon} alt="" />
            <div className="content__text">
              <Paragraph medium bold color={colors.marianeBlue}>
                Advance
              </Paragraph>
              <Paragraph>$120/yr</Paragraph>
              <Paragraph small bold color={colors.marianeBlue}>
                2 months free
              </Paragraph>
            </div>
          </CheckboxContentWrapper>
          <Input
            onChange={handleChange}
            className="form__plans__input"
            type="radio"
            name="plan"
            id="advance"
            size="120"
            value={formValues.plan.name}
          />
        </CheckboxItem>
        <CheckboxItem
          className={`form__plans__inputWrapper ${
            formValues.plan.name === 'pro' ? 'active' : ''
          }`}
        >
          <CheckboxContentWrapper>
            <img src={proIcon} alt="" />
            <div className="content__text">
              <Paragraph medium bold color={colors.marianeBlue}>
                Pro
              </Paragraph>
              <Paragraph>$150/yr</Paragraph>
              <Paragraph small bold color={colors.marianeBlue}>
                2 months free
              </Paragraph>
            </div>
          </CheckboxContentWrapper>
          <Input
            onChange={handleChange}
            type="radio"
            name="plan"
            id="pro"
            size="150"
            value={formValues.plan.name}
          />
        </CheckboxItem>
        <ErrorWrapper>
          <Paragraph color={colors.strawberryRed} center>
            {error.plan}
          </Paragraph>
        </ErrorWrapper>
      </SelectPlanForm>

      <SlectPlanCheckBoxSwitchWrapper>
        <Label>
          <Paragraph className={`${isChecked ? 'active' : ''}`}>
            Monthly
          </Paragraph>
          <CustomInputWrapper>
            <SwitchInput
              name="duration"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <SwitchCustomInput>
              <div className={`bullet ${isChecked ? 'active' : ''}`}></div>
            </SwitchCustomInput>
          </CustomInputWrapper>
          <Paragraph className={`${!isChecked ? 'active' : ''}`}>
            Yearly
          </Paragraph>
        </Label>
      </SlectPlanCheckBoxSwitchWrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setShowSlide(0);
          }}
          gray
        >
          Go Back
        </Button>
        <Button onClick={handleValidate} type="button">
          Next Step
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default SelectPlan;
