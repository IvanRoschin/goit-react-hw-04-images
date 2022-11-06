import styled from 'styled-components';

export const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const PageTitle = styled.h1`
  padding-left: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Request = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
