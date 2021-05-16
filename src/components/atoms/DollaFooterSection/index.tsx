import React from 'react';
import { Link, LinkItems, LinkTitle, LinksContainer, LinksWrapper } from './styles';
import NextLink from 'next/link';

type Link1 = {
	label: string;
	link: string;
};

interface Props {
	title: string;
	links: Link1[];
	color: string;
}

const DollaFooterSection = ({ title, links, color }: Props) => {
	return (
		<LinksContainer>
			<LinksWrapper>
				<LinkItems color={color}>
					<LinkTitle>{title}</LinkTitle>
					{links.map((link) => {
						return (
							<NextLink href={link.link}>
								<Link>{link.label}</Link>
							</NextLink>
						);
					})}
				</LinkItems>
			</LinksWrapper>
		</LinksContainer>
	);
};

DollaFooterSection.defaultProps = {
	title: 'About Us',
	links: [
		{ label: 'How it Works', link: '#' },
		{ label: 'Testimonals', link: '#' },
		{ label: 'Careers', link: '#' },
		{ label: 'Investors', link: '#' },
		{ label: 'Term of Service', link: '#' }
	],
	color: 'black'
};
export default DollaFooterSection;
