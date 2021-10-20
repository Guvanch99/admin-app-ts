import styled from "styled-components";

import {IColor} from "../../interface/theme.interface";

interface IButton {
    bg: boolean
    theme?: IColor
}

export const Button = styled.button<IButton>`
  color: ${({theme}) => theme.colors.whiteColor};
  background: ${({bg, theme}) => bg ? 'transparent' : theme.colors.greenSuccessColor};
  margin-bottom: 1rem;
  font-size: 2em;
  padding: .2rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 5%;

  &:disabled {
    color: ${({theme}) => theme.colors.whiteColor};
    background: ${({theme}) => theme.colors.lighterRedColor};
    cursor: auto;
  }
`