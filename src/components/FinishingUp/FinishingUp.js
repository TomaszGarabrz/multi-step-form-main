import React from 'react';
import { Wrapper } from '../../styles/globalStyles';
import { Paragraph, Title } from '../../styles/typography';
import { colors } from '../../styles/variables';
import {
  FinishingGrayWrapper,
  FinishingItem,
  FinishingWrapper,
  ItemsWrapper,
  Underline,
} from './FinishingUp.styled';

import { useFormContext } from '../../context/FormContext';
import { ButtonsWrapper } from '../SelectPlan/SelectPlan.styled';
import { Button } from '../../styles/components';

const FinishingUp = () => {
  const { setShowSlide, handleForm, formValues } = useFormContext();

  // const [package] = formValues;

  const { plan } = formValues;

  const sumOfServices = formValues.package.reduce((a, b) => a + b.price, 0);

  console.log(formValues);

  return (
    <Wrapper flex gap="0.5rem">
      <Title>Finishing up</Title>
      <Paragraph>Double-check everyghing looks OK before comfirming.</Paragraph>
      <FinishingWrapper>
        <FinishingGrayWrapper>
          <FinishingItem>
            <ItemsWrapper>
              <Paragraph bold color={colors.marianeBlue}>
                {plan.name} ({plan.time})
              </Paragraph>
              <Paragraph underline onClick={() => setShowSlide(1)}>
                Change
              </Paragraph>
            </ItemsWrapper>
            <Paragraph bold color={colors.marianeBlue}>
              {plan.time === 'monthly'
                ? `$${plan.price / 12}/mo`
                : `$${plan.price}`}
            </Paragraph>
          </FinishingItem>
          <Underline />
          {formValues.package.map((item) => {
            return (
              <FinishingItem key={item.name}>
                <ItemsWrapper>
                  <Paragraph>{item.name}</Paragraph>
                </ItemsWrapper>
                <Paragraph color={colors.marianeBlue}>
                  ${item.price}/mo
                </Paragraph>
              </FinishingItem>
            );
          })}
        </FinishingGrayWrapper>
        <FinishingItem padding="1rem">
          <Paragraph>Total (per month)</Paragraph>
          <Paragraph medium bold color={colors.purplishBlue}>
            +$
            {formValues.plan.price / 12 + sumOfServices}
            /mo
          </Paragraph>
        </FinishingItem>
      </FinishingWrapper>

      <ButtonsWrapper>
        <Button gray>Go Back</Button>
        <Button onClick={() => setShowSlide(4)} type="button">
          Confirm
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default FinishingUp;
