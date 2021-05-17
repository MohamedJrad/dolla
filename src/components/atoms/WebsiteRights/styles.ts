import styled from 'styled-components';
import media from 'styled-media-query';

export const Container =
	styled.small <
	{ color: string } >
	`
  color: ${(props) => props.color};
    ${media.lessThan('medium')`

		padding-bottom: 16px;
  `}

	
`;
