import styled, { css } from 'styled-components';

export const Li = styled.li`
  list-style-type: none;
`;

export const Folder = styled.img`
  margin: auto;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Div = styled.div`
  display: inline-flex;
  margin: 4px 0;
  ${props =>
    props.hasChildren
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
        `}
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;
  margin: auto;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
