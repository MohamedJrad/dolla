import styled from 'styled-components';
import media from 'styled-media-query';
export const LinksContainer = styled.div`
	display: flex;
	margin: 8px;
	justify-content: center;
	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;
export const LinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;
export const LinkItems =
	styled.div <
	{ color: string } >
	`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: ${(props) => props.color};
	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;
export const LinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;
export const Link = styled.span`
	cursor: pointer;
	font-size: 14px;
	margin-bottom: 0.5rem;
	text-decoration: none;

	&:hover {
		color: #01bf71;
		transition: 0.3s ease-in-out;
	}
`;
