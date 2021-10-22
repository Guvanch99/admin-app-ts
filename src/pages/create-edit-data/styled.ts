import styled, {css} from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const FormEdit = styled.form`
  display: grid;
  justify-items: center;
  align-items: center;
`

export const EditMenuText = styled.h1`
  font-size: 4em;
  color: ${({theme}) => theme.colors.mainColor};
  margin: 2rem auto;
`

export const ButtonContainer = styled.div<{ isPreview: boolean|string }>`
  ${({isPreview}) => {
    if (isPreview) {
    return  css`
        ${grid({justify: 'space-around', align: 'center'})};
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      `
    }
  }
  }
`

export const Select = styled.select`
  display: inline;
  border-color: transparent;
  font-size: 1.6em;
  text-transform: capitalize;
  padding: .25rem .5rem;
  width: 10rem;
  margin: 1rem 0;
`

export const ErrorGlobal = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({theme}) => theme.colors.lighterRedColor};
`