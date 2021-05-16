import React from 'react';
import { Nav, Container } from './styles';

interface Props {
  bg: string;
  children?: React.ReactNode | React.ReactNode[];
}

const NavbarContainer = ({ bg, children }: Props) => {
  return (
    <Nav bg={bg}>
      <Container>{children}</Container>
    </Nav>
  );
};

NavbarContainer.defaultProps = {
  bg: '#3633ff',
};

export default NavbarContainer;
