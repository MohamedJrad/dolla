import React from 'react';
import {
	BtnWrap,
	Column1,
	Column2,
	Container,
	Heading,
	Img,
	ImgWrap,
	Row,
	Subtitle,
	TextWrapper,
	TopLine,
	Wrapper
} from './styles';

import ReactScrollBtn from '../../atoms/ReactScrollBtn';
import Icon from './SVGCAR';

interface P {
	fill: string;
	width: string;
	height: string;
}
interface Props {
	id: string;
	lightBg: boolean;
	imgStart: boolean;
	topLine: string;
	headline: string;
	description: string;
	buttonLabel: string;
	img: React.ComponentType<P>;
	alt: string;
}

const DollaInfoSection = ({ id, lightBg, imgStart, topLine, headline, description, buttonLabel, img, alt }: Props) => {
	const I = img;
	const btnBg = lightBg ? '#010606' : '#01bf71';
	const btnLabelColor = lightBg ? '#f9f9f9' : '#010606';
	return (
		<Container lightBg={lightBg} id={id}>
			<Wrapper>
				<Row imgStart={imgStart}>
					<Column1>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightBg={lightBg}>{headline}</Heading>
							<Subtitle lightBg={lightBg}>{description}</Subtitle>
							<BtnWrap>
								<ReactScrollBtn
									bg={btnBg}
									color={btnLabelColor}
									label={buttonLabel}
									to={id}
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
								/>
							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<I fill="#9a9a9a" width="100%" height="100%" />
						</ImgWrap>
					</Column2>
				</Row>
			</Wrapper>
		</Container>
	);
};

DollaInfoSection.defaultProps = {
	id: 'about',
	lightBg: true,
	lightTextDesc: false,
	topLine: 'Premium Bank',
	headline: 'Unlimited Transactions with zero fees',
	description:
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
	buttonLabel: 'Get started',
	imgStart: false,
	img: Icon,
	alt: 'Car',
	dark: true,
	primary: true,
	darkText: true
};

export default DollaInfoSection;
