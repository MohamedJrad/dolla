import styled from 'styled-components';

export const Item = styled.div<{

  bg: string,
  size:string
}>`

    background-color: ${(props) => props.bg};
  cursor: pointer;
  margin: 20px;
  font-size:${(props) => props.size};
`;

export const Name = styled.span<{ itemColor:string}

>`
  color: ${(props) => props.itemColor};
`;
export const Icon = styled.img``;