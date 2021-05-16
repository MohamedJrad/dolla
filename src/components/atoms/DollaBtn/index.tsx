import React from 'react';
import { Container, Label } from './styles';

interface Props {
	label?: string;
	bg?: string;
	color?: string;
	MobileOnly?: boolean;
	DesktopOnly?: boolean;
}

const DollaBtn = ({ label, bg, color, DesktopOnly, MobileOnly }: Props) => {
	return (
		<Container bg={bg} DesktopOnly={DesktopOnly} MobileOnly={MobileOnly}>
			<Label color={color}>{label}</Label>
		</Container>
	);
};

DollaBtn.defaultProps = {
	label: 'Button',
	bg: 'green',
	color: 'black',
	MobileOnly: false,
	DesktopOnly: false
};
export default DollaBtn;
