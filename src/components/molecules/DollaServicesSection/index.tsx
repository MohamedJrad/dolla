import React from 'react';
import { Container, H1, Wrapper } from './styles';
import DollaCard from '../../atoms/DollaCard';
import Remote from './SVGComponents/RemoteSVG';
import Personal from './SVGComponents/PersonalSVG';
import Discount from './SVGComponents/DiscountSVG';

type CardContent = {
	title: string;
	description: string;
	img: any;
};

interface Props {
	cardsContent: CardContent[];
}

const DollaServicesSection = ({ cardsContent }: Props) => {
	return (
		<Container id="services">
			<H1>Our Services</H1>
			<Wrapper>
				{cardsContent.map((content) => {
					return <DollaCard {...content} />;
				})}
			</Wrapper>
		</Container>
	);
};

DollaServicesSection.defaultProps = {
	cardsContent: [
		{
			title: 'Reduce Expenses',
			description: 'We help reduce your fees and increase your overall revenue.',
			img: Discount
		},
		{
			title: 'Virtual Offices',
			description: 'You can access our platform online anywhere in the world',
			img: Remote
		},
		{
			title: 'Premium Benefits',
			description: 'Unlock our special membership card that return 5% cash back',
			img: Personal
		}
	]
};

export default DollaServicesSection;
