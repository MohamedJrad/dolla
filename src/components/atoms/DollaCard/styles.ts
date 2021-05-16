import styled from 'styled-components';
import media from 'styled-media-query';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	align-items: center;
	justify-content: flex-start;
	border-radius: 10px;
	border-color: black;
	max-height: 340px;
	max-width: 190px;
	min-height: 320px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transform: all 0.2 ease-in-out;
		cursor: pointer;
	}
`;
export const Wrapper = styled.div`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const H2 = styled.h1`
	font-size: 1rem;

	margin-bottom: 12px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const P = styled.p`
	font-size: 1rem;

	text-align: center;
`;
