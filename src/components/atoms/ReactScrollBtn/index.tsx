import React from 'react';
import { Container, Label } from './styles';
import { Link } from 'react-scroll';
import { boolean } from '@storybook/addon-knobs';
interface Props {
	label?: string;
	bg?: string;
	color?: string;
	MobileOnly?: boolean;
	DesktopOnly?: boolean;
	to: string;
	spy?: boolean;
	smooth?: true;
	hashSpy?: true;
	offset?: number;
	duration?: number;
	delay?: number;
	isDynamic?: boolean;
	onSetActive?: any;
	onSetInactive?: any;
	ignoreCancelEvents?: boolean;
}

const ReactScrollBtn = ({
	label,
	bg,
	color,
	DesktopOnly,
	MobileOnly,
	to,
	spy,
	smooth,
	hashSpy,
	offset,
	duration,
	delay,
	isDynamic,
	onSetActive,
	onSetInactive,
	ignoreCancelEvents
}: Props) => {
	return (
		<Link
			activeClass="active"
			to="target"
			spy={spy}
			smooth={smooth}
			hashSpy={hashSpy}
			offset={offset}
			duration={duration}
			delay={delay}
			isDynamic={isDynamic}
			onSetActive={onSetActive}
			onSetInactive={onSetInactive}
			ignoreCancelEvents={ignoreCancelEvents}
		>
			<Container bg={bg} DesktopOnly={DesktopOnly} MobileOnly={MobileOnly}>
				<Label color={color}>{label}</Label>
			</Container>
		</Link>
	);
};

ReactScrollBtn.defaultProps = {
	label: 'Button',
	bg: 'green',
	color: 'black',
	MobileOnly: false,
	DesktopOnly: false
};
export default ReactScrollBtn;
