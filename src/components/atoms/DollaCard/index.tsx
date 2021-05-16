import React from 'react';
import { Card, Wrapper, H2, P } from './styles';
import Remote from './RemoteSVG';

interface Props {
	title: string;
	description: string;
	img: any;
}

const DollaCard = ({ title, description, img }: Props) => {
	const I = img;
	return (
		<Card>
			<Wrapper>
				<I fill="#9a9a9a" width="100%" height="100%" />
			</Wrapper>

			<H2>{title}</H2>
			<P>{description}</P>
		</Card>
	);
};

DollaCard.defaultProps = {
	title: 'Virtual Offices',
	description: 'You can access our platform online anywhere in the world',
	img: Remote
};
export default DollaCard;
