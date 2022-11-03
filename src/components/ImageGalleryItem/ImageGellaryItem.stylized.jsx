import styled from 'styled-components';

export const ContactListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px;
  padding-left: 0px;
`;

export const ContactListData = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  align-items: center;
`;

export const ContactListButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  box-shadow: 0 0 20px ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.primary};
  background-size: 200% auto;
  cursor: pointer;
  transition: ${p => p.theme.transition.main};
  &:hover {
    color: ${p => p.theme.colors.primary};
    text-decoration: none;
    background: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.primary};
  }
`;
