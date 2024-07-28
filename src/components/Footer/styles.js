import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.footerBackgroundColor};
    padding: 0 ${theme.specing.large};
    margin-top: ${theme.specing.large};
    border-radius: ${theme.borderRadius};
  `}
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;