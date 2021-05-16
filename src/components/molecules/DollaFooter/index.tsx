import React from 'react';
import { Container, Wrapper } from './styles';
import DollaFooterSection from '../../atoms/DollaFooterSection';

type Link1 = {
	label: string;
	link: string;
};

type Section = {
	title: string;
	links: Link1[];
	color: string;
};

interface Props {
	sections: Section[];
}

const DollaFooter = ({ sections }: Props) => {
	return (
		<Container>
			<Wrapper>
				{sections.map((section) => {
					return <DollaFooterSection title={section.title} links={section.links} color={section.color} />;
				})}
			</Wrapper>
		</Container>
	);
};

DollaFooter.defaultProps = {
	sections: [
		{
			title: 'About Us',
			links: [
				{ label: 'How it Works', link: '#' },
				{ label: 'Testimonals', link: '#' },
				{ label: 'Careers', link: '#' },
				{ label: 'Investors', link: '#' },
				{ label: 'Term of Service', link: '#' }
			],
			color: 'white'
		},
		{
			title: 'Videos',
			links: [
				{ label: 'Submit Video', link: '#' },
				{ label: 'Ambassadors', link: '#' },
				{ label: 'Agency', link: '#' },
				{ label: 'Influencer', link: '#' }
			],
			color: 'white'
		},
		{
			title: 'Contact Us',
			links: [
				{ label: 'Contact', link: '#' },
				{ label: 'Support', link: '#' },
				{ label: 'Distinations', link: '#' },
				{ label: 'Sponsorships', link: '#' }
			],
			color: 'white'
		},
		{
			title: 'Social Media',
			links: [
				{ label: 'Instagram', link: '#' },
				{ label: 'Facebook', link: '#' },
				{ label: 'Youtube', link: '#' },
				{ label: 'Twitter', link: '#' }
			],
			color: 'white'
		}
	]
};

export default DollaFooter;
