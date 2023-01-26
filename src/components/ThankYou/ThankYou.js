import React from 'react';

import { Wrapper } from '../../styles/globalStyles';
import { Paragraph, Title } from '../../styles/typography';

import { ThankWrapper, ThankIconWrapper } from './ThankYou.styled';

import icon from '../../images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <Wrapper flex gap="0.5rem">
      <ThankWrapper>
        <ThankIconWrapper>
          <img src={icon} alt="thank_you_icon" />
        </ThankIconWrapper>
        <Title>Thank you!</Title>
        <Paragraph center medium>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum
          accusamus necessitatibus dolorem, nostrum officia. Praesentium a enim
          veritatis, ad mollitia reprehenderit adipisci, non quos fugit optio
          suscipit reiciendis. Repellendus.
        </Paragraph>
      </ThankWrapper>
    </Wrapper>
  );
};

export default ThankYou;
