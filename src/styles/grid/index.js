import styled, { css } from 'styled-components';
import { CONTAINER_MAX_WIDTH, GUTTER_WIDTH, MAX_COL } from './constants';

const getColWidth = (width = MAX_COL) => (width / MAX_COL) * 100;

export const Container = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ gutterOff }) => (gutterOff ? '0' : `${GUTTER_WIDTH}px`)};
  max-width: ${({ fuild }) => (fuild ? '100%' : `${CONTAINER_MAX_WIDTH}px`)};
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -${GUTTER_WIDTH}px;
  flex-wrap: wrap;
`;

const getColCss = (lg, md, sm) => {
  const smW = getColWidth(sm);
  const mdW = md ? getColWidth(md) : smW;
  const lgW = lg ? getColWidth(lg) : mdW;

  return css`
    flex: 0 0 ${lgW}%;
    max-width: ${lgW}%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      flex: 0 0 ${mdW}%;
      max-width: ${mdW}%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding: 0;
      flex: 0 0 ${smW}%;
      max-width: ${smW}%;
    }
  `;
};

export const Col = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  padding: 0 ${GUTTER_WIDTH}px;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  ${({ lg, md, sm }) => getColCss(lg, md, sm)};
`;
