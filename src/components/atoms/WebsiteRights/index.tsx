import React from 'react';
import { Container } from './styles';

interface Props {
	color?: string;
	name?: string;
}

const WebsiteRights = ({ color, name }: Props) => {
	return (
		<Container color={color}>
			{name} © {new Date().getFullYear()} All rights reserved.
		</Container>
	);
};

WebsiteRights.defaultProps = {
	name: 'dolla'
};
export default WebsiteRights;
