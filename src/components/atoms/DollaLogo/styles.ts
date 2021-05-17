import styled from 'styled-components';

export const Container = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  min-width: 64px;
  width: fit-content;
  cursor: pointer;
  padding: 0 12px 0 12px;
`;

export const NavLogo = styled.h1<{ color: string, font: string }>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
  text-decoration: none;
`;
