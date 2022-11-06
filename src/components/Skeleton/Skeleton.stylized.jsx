import styled from 'styled-components';

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${p => p.theme.space[2]};
`;

export const LoadingText = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: lowercase;
`;
