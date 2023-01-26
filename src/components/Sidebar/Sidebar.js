import React, { useState } from 'react';
import {
  BgWrapper,
  DetailsWrapper,
  NumberWrapper,
  StepsWrapper,
  StepWrapper,
  Wrapper,
} from './Sidebar.styled';

import bg from '../../images/bg-sidebar-desktop.svg';
import { Paragraph } from '../../styles/typography';
import { colors } from '../../styles/variables';

import { useFormContext } from '../../context/FormContext';

const Sidebar = () => {
  const {
    showSlide,
    setShowSlide,

    setValidPage,
    validPage,
  } = useFormContext();

  return (
    <Wrapper>
      <StepsWrapper>
        <StepWrapper
          onClick={() => {
            setShowSlide(0);
          }}
        >
          <NumberWrapper className={`${showSlide === 0 ? 'active' : ''}`}>
            <Paragraph
              className={`${showSlide === 0 ? 'active' : ''}`}
              color={colors.white}
              bold
            >
              1
            </Paragraph>
          </NumberWrapper>
          <DetailsWrapper>
            <Paragraph small upper>
              Step 1
            </Paragraph>
            <Paragraph bold color={colors.white} upper>
              Your Info
            </Paragraph>
          </DetailsWrapper>
        </StepWrapper>

        <StepWrapper
          className={`${validPage.page < 1 ? 'disabled' : ''}`}
          onClick={() => {
            setShowSlide(1);
            setValidPage({
              ...validPage,
            });
          }}
        >
          <NumberWrapper className={`${showSlide === 1 ? 'active' : ''}`}>
            <Paragraph
              className={`${showSlide === 1 ? 'active' : ''}`}
              color={colors.white}
              bold
            >
              2
            </Paragraph>
          </NumberWrapper>
          <DetailsWrapper>
            <Paragraph small upper>
              Step 2
            </Paragraph>
            <Paragraph bold color={colors.white} upper>
              Select plan
            </Paragraph>
          </DetailsWrapper>
        </StepWrapper>

        <StepWrapper
          className={`${validPage.page < 2 ? 'disabled' : ''}`}
          onClick={() => {
            setShowSlide(2);
            setValidPage({
              ...validPage,
            });
          }}
        >
          <NumberWrapper className={`${showSlide === 2 ? 'active' : ''}`}>
            <Paragraph
              className={`${showSlide === 2 ? 'active' : ''}`}
              color={colors.white}
              bold
            >
              3
            </Paragraph>
          </NumberWrapper>
          <DetailsWrapper>
            <Paragraph small upper>
              Step 3
            </Paragraph>
            <Paragraph bold color={colors.white} upper>
              add-ons
            </Paragraph>
          </DetailsWrapper>
        </StepWrapper>

        <StepWrapper
          className={`${validPage.page < 3 ? 'disabled' : ''}`}
          onClick={() => {
            setShowSlide(3);
            setValidPage({
              ...validPage,
            });
          }}
        >
          <NumberWrapper className={`${showSlide === 3 ? 'active' : ''}`}>
            <Paragraph
              className={`${showSlide === 3 ? 'active' : ''}`}
              color={colors.white}
              bold
            >
              4
            </Paragraph>
          </NumberWrapper>
          <DetailsWrapper>
            <Paragraph small upper>
              Step 4
            </Paragraph>
            <Paragraph bold color={colors.white} upper>
              Summary
            </Paragraph>
          </DetailsWrapper>
        </StepWrapper>
      </StepsWrapper>

      <BgWrapper bg={bg} />
    </Wrapper>
  );
};

export default Sidebar;
