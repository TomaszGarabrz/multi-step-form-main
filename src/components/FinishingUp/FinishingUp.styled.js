import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

export const FinishingWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FinishingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : '')};
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FinishingGrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${colors.magnolia};
  padding: 1rem;
  border-radius: 10px;
`;

export const Underline = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.lightGray};
  margin: 0;
  padding: 0;
`;
