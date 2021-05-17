import React from 'react';
import { Wrapper, Container } from './styles';
import DollaLogo from '../../atoms/DollaLogo';
import WebsiteRights from '../../atoms/WebsiteRights';
import SocialMediaIcons from '../../atoms/SocialMediaIcons';
import { Link } from 'react-scroll';

interface Props {
	bg: string;
}

const DollaWebsiteRights = ({ bg }: Props) => {
	return (
		<Container bg={bg}>
			<Wrapper>
				<Link to="home">
					<DollaLogo bg="transparent" color="white" />
				</Link>

				<WebsiteRights name="dolla" color="white" />
				<SocialMediaIcons color="white" />
			</Wrapper>
		</Container>
	);
};

DollaWebsiteRights.defaultProps = {
	bg: ' #101522'
};
export default DollaWebsiteRights;
