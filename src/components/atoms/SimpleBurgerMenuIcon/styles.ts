import styled from 'styled-components';
import media from 'styled-media-query';

export const MobileIcon = styled.div<{ bg: string }>`
  display: none;
  ${({ bg }) => media.lessThan('medium')`


    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute;
    top: 0;
    right: 0; */
    /* transform: translate(-100%, 20%); */
    font-size: 1.8rem;
    cursor: pointer;
    background-color: ${bg}
    width: 45px;
    height: 45px;

`}
`;
