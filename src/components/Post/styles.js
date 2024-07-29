import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.postBackgroundColor};
    border-radius: ${theme.borderRadius};
    padding: ${theme.specing.medium};

    h2{
      margin: 0 0 ${theme.specing.small}
    }

    & + article{
      margin-top: ${theme.specing.small};
    }
  `}

  display: flex;
  flex-direction: column;

  small{
    opacity: 0.7;
  }
`;