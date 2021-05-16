import React from 'react';
import { Container, Bg, Video } from './styles';
//@ts-ignore
interface Props {
	video: string;
}

const VideoBg = ({ video }: Props) => {
	return (
		<Container>
			<Bg>
				<Video autoPlay loop muted src={video} typeof="video/mp4" />
			</Bg>
		</Container>
	);
};

VideoBg.defaultProps = {
	video: 'static/media/video.7d1ea6a9.mp4'
};

export default VideoBg;
