import styled from 'styled-components';
import media from 'styled-media-query';

export const Container =
	styled.div <
	{ bg: string, direction: 'vertical' | 'horizontal', DesktopOnly: boolean, MobileOnly: boolean } >
	`
  display: flex;
  flex-direction:${(props) => (props.direction === 'vertical' ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  height: 100%;
  min-height:40px;
  overflow-y: hidden;
  overflow-x: hidden;

  /* overflow-x: scroll; */
  -webkit-overflow-x-scrolling: touch;
  -webkit-scrollbar {
    width: 0 !important;
  }
  -webkit-scrollbar {
    display: none;
  }

  ${({ MobileOnly }) => media.greaterThan('medium')`
display:${MobileOnly ? 'none' : 'flex'}
  `}
    ${({ DesktopOnly }) => media.lessThan('medium')`
display:${DesktopOnly ? 'none' : 'flex'}
  `}


`;
