import styled from 'styled-components';
import media from 'styled-media-query';

export const Container =
	styled.div <
	{ bg: string } >
	`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	background-color:${(props) => props.bg};

`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1100px;
	margin-right: 24px;
	margin-left: 24px;
	${media.lessThan('medium')`
	flex-direction: column;
		padding-bottom: 24px;
		
  `} @media screen and (max-width: 820px) {
	}
`;
