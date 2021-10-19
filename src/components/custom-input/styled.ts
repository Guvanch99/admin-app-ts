import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";
import {handleColorType} from "../../styles/functions.styled";

export const Container = styled.div`
  ${grid({justify: 'center', align: "center"})};
  margin: 1rem 0;
  color: ${({theme}) => theme.colors.whiteColor};
`

export const Label = styled.label`
  font-size: 1.5em;
  margin-right: .4rem;
  text-align: center;
`

export const Input = styled.input`
  margin: .4rem 0;
  font-size: 1.6em;
  line-height: 1.4rem;
  border: none;
  border-bottom: 1px solid ${({layout, theme}) => layout ? theme.colors.lighterRedColor : theme.colors.lighterBlackColor};
  outline: none;
  width: 15rem;
  background: ${({bg}) => handleColorType(bg)};
  color: ${({theme}) => theme.colors.secondaryColor};

  &:disabled {
    background-color: ${({theme}) => theme.colors.whiteColor};
    color: ${({theme}) => theme.colors.secondaryColor};;
  }

  &:focus {
    border-bottom: 1px solid ${({theme}) => theme.colors.mainColor};
    background-color: ${({theme}) => theme.colors.whiteColor};
  }
`

export const Error = styled.span`
  color: ${({theme}) => theme.colors.lighterRedColor};
  font-size: 1em;
  font-weight: bold;
`

