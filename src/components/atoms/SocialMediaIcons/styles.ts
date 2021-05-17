import styled from 'styled-components';

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;

	margin-left: 12px;
	margin-right: 12px;
`;

export const SocialIconLink =
	styled.a <
	{ color } >
	`
	color: ${(props) => props.color};
	font-size: 24px;
`;
