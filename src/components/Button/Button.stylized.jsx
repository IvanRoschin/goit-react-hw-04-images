import styled from 'styled-components';

export const LoadButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-left: 50%;
  transform: translateX(-50%);

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-color: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;

  transition: font-weight 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover {
    background-color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
