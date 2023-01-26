import React, { useEffect, useCallback, useState } from 'react';

import { Button, InputsWrapper } from '../../styles/components';
import { Wrapper } from '../../styles/globalStyles';
import { Paragraph, Title } from '../../styles/typography';

import { Input, InputLabel, InputTexts, InputWrapper } from './InfoForm.styled';
import { useFormContext } from '../../context/FormContext';

const InfoForm = () => {
  const initialValue = { name: '', email: '', number: '' };
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    setShowSlide,
    setFormValues,
    isValidPageOne,
    formValues,
    setIsValidPageOne,
    setValidPage,
    validPage,
  } = useFormContext();

  // INPUTS VALUE

  // useEffect(() => {
  //   pageCallback();
  // }, [isValidPageOne]);

  // const pageCallback = useCallback(() => {
  //   if (validPage) {
  //     setShowSlide(0);
  //     console.log('page one');
  //   }
  // }, [isValidPageOne]);

  /* */

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log(isValidPageOne);
  };

  const handleSubmit = (e) => {
    setErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const error = {};
    if (!formValues.name) {
      error.name = 'This filed is required';
    }
    if (!formValues.email) {
      error.email = 'This filed is required';
    } else if (!formValues.email.includes('@')) {
      error.email = 'Wrong format';
    }
    if (!formValues.number) {
      error.number = 'This filed is required';
    } else if (formValues.number.length !== 9) {
      error.number = 'Needs to be exactly 9 characters';
    }

    return error;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      // TUTAJ PRZEKAZANIE INFORMACJI DO KONTEKSTU
      setValidPage({
        ...validPage,
        page: 1,
      });
      setShowSlide(1);
    }
  }, [errors]);

  return (
    <Wrapper flex gap="0.5rem">
      <Title>Personal Info</Title>
      <Paragraph>
        Please provide your name, email address, and phone number.
      </Paragraph>

      <InputsWrapper>
        <InputWrapper>
          <InputTexts>
            <InputLabel>Name:</InputLabel>

            <Paragraph small error>
              {errors.name}
            </Paragraph>
          </InputTexts>
          <Input
            className={`${errors.name ? 'error' : ''}`}
            value={formValues.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputTexts>
            <InputLabel>Email Address:</InputLabel>

            <Paragraph small error>
              {errors.email}
            </Paragraph>
          </InputTexts>

          <Input
            className={`${errors.email ? 'error' : ''}`}
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <InputTexts>
            <InputLabel>Phone Number:</InputLabel>

            <Paragraph small error>
              {errors.number}
            </Paragraph>
          </InputTexts>

          <Input
            className={`${errors.number ? 'error' : ''}`}
            name="number"
            type="number"
            value={formValues.number}
            onChange={handleChange}
          />
        </InputWrapper>

        <Button bottomRight onClick={handleSubmit} type="button">
          Elo
        </Button>
      </InputsWrapper>
    </Wrapper>
  );
};

export default InfoForm;
