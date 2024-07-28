import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.headerBackgroundColor};
    padding: 0 ${theme.specing.large};
    border-radius: ${theme.borderRadius};

    button{
      font-size: ${theme.specing.medium};
    }
  `}
  
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;