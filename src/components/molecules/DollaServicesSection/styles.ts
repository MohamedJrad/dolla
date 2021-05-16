import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;
	padding-bottom: 64px;

	/* @media screen and (max-width: 768px) {
		height: 1100px;
	}
	@media screen and (max-width: 480px) {
		height: 1300px;
	} */
`;
export const Wrapper = styled.div`
	display: grid;
	z-index: 1;

	/* height: 860px; */

	max-width: 1000px;
	margin: 10px auto;
	padding: 10px auto;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 48px;
	padding: 0 50px;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const H1 = styled.h1`
	font: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;
