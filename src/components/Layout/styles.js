import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    background: ${theme.linkBackgroundColor};
    margin-top: ${theme.specing.medium};
    padding: ${theme.specing.medium};
    border-radius: ${theme.borderRadius};

    a{
      color: ${theme.textColor};
    }
    `}
    
    justify-content: space-between;
    display: flex;
    
    a{
    margin: 0 30px 0 30px;
    text-decoration: none;
  }
`;