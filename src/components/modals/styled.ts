import styled from "styled-components";

import {flexCenter} from "../../styles/flex.styled";

import {grid,flex} from "../../styles/mixin.styled";


export const ModalWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 2rem;
`

export const Modal = styled.div`
  display: grid;
  justify-items: center;
  color: ${({theme}) => theme.colors.secondaryColor};
  background: ${({theme}) => theme.colors.whiteColor};
  padding: 2rem;
  margin: 1rem 3rem;
  border-radius: 10px;
  position: absolute;
  z-index: 99999;
`

export const FlexContainer = styled.div`
  ${flex({justify: 'space-around', align: 'center'})};
`

export const Image = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  margin: 2rem 0;
`


export const ModalPreviewInfo = styled.div`
  ${grid({justify: 'space-evenly', align: 'center'})};
  grid-template-columns: 1fr;
  height: 15rem;
  margin: 0 2rem;
`

export const ModalPreviewName = styled.h1`
  font-size: 4em;

  @media (max-width: ${({theme}) => theme.responsive.mobile}) {
    font-size: 3em;
  }
`

export const ModalPreviewPrice = styled.h2`
  font-size: 3em;

  @media (max-width: ${({theme}) => theme.responsive.mobile}) {
    font-size: 2em;
  }
`

export const ModalPreviewDescription = styled.p`
  font-size: 3em;
  @media (max-width: ${({theme}) => theme.responsive.mobile}) {
    font-size: 2em;
  }
`

export const ModalSuccessLabel = styled.h1`
  text-align: center;
  font-size: 5em;
  color: ${({theme}) => theme.colors.greenSuccessColor}
`

export const Icon = styled.i`
  margin: 2rem 0;
  font-size: 6em;
  color: ${({theme}) => theme.colors.greenSuccessColor};
`