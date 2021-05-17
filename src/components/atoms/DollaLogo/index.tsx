import { url } from 'inspector';
import React, { ReactComponentElement } from 'react';
import { Container, NavLogo } from './styles';
//import { ReactComponent as MyIcon } from './icon.svg';
interface Props {
	name: string;
	icon: React.ReactChild;
	font: string;
	color: string;
	bg: string;
}

const DollaLogo = ({ name, icon, font, color, bg }: Props) => {
	return (
		<Container bg={bg}>
			<NavLogo color={color} font={font}>
				{name}
			</NavLogo>
			<div>{icon}</div>
		</Container>
	);
};

DollaLogo.defaultProps = {
	name: 'dolla',
	color: '#ff3333',
	bg: '#1024db',
	font: '',
	icon: ''
};

export default DollaLogo;
