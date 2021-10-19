import styled, {css} from "styled-components"

const baseStyle = css`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.blueColor};
    transform: scale(1.02);
  }
;
`

export const Button = styled.button`
  color: ${({theme}) => theme.colors.mainColor};
  position: fixed;
  ${baseStyle};
  margin-top: -0.4rem;
  margin-right: 1rem;

  @media (max-width: ${({theme}) => theme.netbook} ) {
    display: grid;
    position: static;
    margin: 2rem auto;
  };
`

export const Icon = styled.i`
  ${baseStyle};
  margin: 0 1rem;
`