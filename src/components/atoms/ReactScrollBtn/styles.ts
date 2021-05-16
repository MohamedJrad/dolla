import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.button<{
   MobileOnly: boolean,
    DesktopOnly: boolean,
  bg: string
}>`
  /* display: flex; */
  align-items: center;
  width: fit-content;
  border-radius: 50px;
  background-color: ${(props) => props.bg};
  white-space: nowrap;
  padding: 0 30px 0 30px;
  outline: none;
  border: none;

  cursor: pointer;

  ${({ MobileOnly }) => media.greaterThan('medium')`
display:${MobileOnly ? 'none' : 'flex'}
  `}
    ${({ DesktopOnly }) => media.lessThan('medium')`
display:${DesktopOnly ? 'none' : 'flex'}
  `}
`;
export const Label = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight:bold;
  text-decoration: none;
`;
