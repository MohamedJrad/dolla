import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForwad, ArrowRight } from './styles';
//@ts-ignore
import Video from './video.mp4';
import NavBtn from '../../atoms/DollaBtn';
import VideoBg from '../../atoms/VideoBg';
import { Link } from 'react-scroll';

const DollaHeroSection = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg video={Video} />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>Sign up for a new account today and recive $250 in credit towards your next payment.</HeroP>
				<HeroBtnWrapper>
					<Link to="signup">
						<NavBtn label="Get started" />
					</Link>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default DollaHeroSection;
