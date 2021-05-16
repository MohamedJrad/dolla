import React, { Children } from 'react';
import { Container, Icon, Wrapper } from './styles';
import { FaTimes } from 'react-icons/fa';

interface Props {
	isOpen: boolean;
	color: string;
	setIsOpen: any;
	children?: React.ReactNode | React.ReactNode[];
}

const SidebarContainer = ({ color, isOpen, setIsOpen, children }: Props) => {
	return (
		<Container isOpen={isOpen}>
			<Icon
				onClick={() => {
					setIsOpen(false);
				}}
			>
				<FaTimes color={color} />
			</Icon>
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

SidebarContainer.defaultProps = {
	color: '#fff',
	isOpen: true
};

export default SidebarContainer;
