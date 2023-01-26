import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Wrapper = styled.div`
  border-radius: 15px;
  background-color: ${colors.purplishBlue};
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const BgWrapper = styled.div`
  position: absolute;
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : null)};
  height: 45%;
  width: 100%;
  bottom: 0;
  background-size: cover;
  background-position: bottom;
`;

export const StepsWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NumberWrapper = styled.div`
  border: 1px solid ${colors.white};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.active ? `${colors.magnolia}` : '')};

  &.active {
    background-color: ${colors.magnolia};
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;

  &.disabled {
    /* background-color: gray; */
    opacity: 0.2;
    pointer-events: none;
  }

  &:hover ${NumberWrapper} {
    background-color: ${colors.magnolia};

    p {
      color: ${colors.marianeBlue};
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
