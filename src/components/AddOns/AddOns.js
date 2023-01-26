import React, { useEffect, useState } from 'react';
import { Button, ButtonsWrapper, ErrorWrapper } from '../../styles/components';
import { Wrapper } from '../../styles/globalStyles';
import { Paragraph, Title } from '../../styles/typography';
import {
  AddOnsWrapper,
  CheckboxWrapper,
  Input,
  Label,
  InfoWrapper,
  CheckboxContent,
} from './AddOns.styled';

import { useFormContext } from '../../context/FormContext';

import { colors } from '../../styles/variables';

const AddOns = () => {
  const {
    setShowSlide,
    setValidPage,
    validPage,
    formValues,
    setFormValues,
    choosedItem,
    setChoosedItem,
  } = useFormContext();

  // PROBLEM Z CHECKED

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { id, size } = e.target;

    if (choosedItem.find((item) => item.name === id)) {
      // tutaj jest problemo
      setChoosedItem(choosedItem.filter((item) => item.name !== id));
    } else {
      setChoosedItem([...choosedItem, { name: id, price: size }]);
    }
  };

  useEffect(() => {
    setFormValues({
      ...formValues,
      package: choosedItem,
    });
  }, [choosedItem]);

  const handleValidate = () => {
    if (formValues.package.length === 0) {
      setError({
        message: 'You need to choose at least one package',
      });
    } else {
      setValidPage({
        ...validPage,
        page: 3,
      });
      setShowSlide(3);
    }
  };

  const handleChecked = (value) => {
    return formValues.package.some((e) => e.name === value);
  };

  return (
    <Wrapper flex gap="0.5rem">
      <Title>Pick add-ons</Title>
      <Paragraph>Add-ons help enhance your gaming experience</Paragraph>

      <AddOnsWrapper>
        <CheckboxWrapper
          className={`${
            formValues.package.find((item) => item.name === 'service')
              ? 'active'
              : ''
          }`}
        >
          <Label>
            <Input
              onChange={handleChange}
              id="service"
              type="checkbox"
              name="service"
              size={1}
              checked={handleChecked('service')}
            />
            <CheckboxContent>
              <InfoWrapper>
                <Paragraph>Online Services</Paragraph>
                <Paragraph>Access to mulityplayer games</Paragraph>
              </InfoWrapper>
              <Paragraph>+$1/yr</Paragraph>
            </CheckboxContent>
          </Label>
        </CheckboxWrapper>
        <CheckboxWrapper
          className={`${
            formValues.package.find((item) => item.name === 'storage')
              ? 'active'
              : ''
          }`}
        >
          <Label>
            <Input
              onChange={handleChange}
              type="checkbox"
              name="storage"
              id="storage"
              size={2}
              checked={handleChecked('storage')}
            />
            <CheckboxContent>
              <InfoWrapper>
                <Paragraph>Online Services</Paragraph>
                <Paragraph>Access to mulityplayer games</Paragraph>
              </InfoWrapper>
              <Paragraph>+$2/yr</Paragraph>
            </CheckboxContent>
          </Label>
        </CheckboxWrapper>
        <CheckboxWrapper
          className={`${
            formValues.package.find((item) => item.name === 'profile')
              ? 'active'
              : ''
          }`}
        >
          <Label>
            <Input
              onChange={handleChange}
              type="checkbox"
              name="profile"
              id="profile"
              size={2}
              checked={handleChecked('profile')}
            />
            <CheckboxContent>
              <InfoWrapper>
                <Paragraph>Online Services</Paragraph>
                <Paragraph>Access to mulityplayer games</Paragraph>
              </InfoWrapper>
              <Paragraph>+$2/yr</Paragraph>
            </CheckboxContent>
          </Label>
        </CheckboxWrapper>
        {error.message ? (
          <ErrorWrapper>
            <Paragraph center color={colors.strawberryRed}>
              {error.message}
            </Paragraph>
          </ErrorWrapper>
        ) : null}
      </AddOnsWrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setShowSlide(1);
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

export default AddOns;
