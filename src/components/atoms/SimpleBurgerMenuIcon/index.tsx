import React from 'react';
import { MobileIcon } from './styles';
import { FaBars } from 'react-icons/fa';

interface Props {
  color?: string;
  bg: string;
  onClick:any
}

const SimpleBurgerMenuIcon = ({ color, bg,onClick }: Props) => {
  return (
    <MobileIcon bg={bg} onClick={onClick}>
      <FaBars color={color} />
    </MobileIcon>
  );
};

SimpleBurgerMenuIcon.defaultProps = {
  color: "green",
  bg: "red",
};

export default SimpleBurgerMenuIcon;
