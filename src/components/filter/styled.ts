import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";
import {flexCenter} from "../../styles/flex.styled";

import {TTheme} from "../../styles/Theme.styled";

export const Tag = styled.div`
  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  transition: opacity .4s ease-in;
  margin: 0.6rem 0;
`

export const TagButton = styled.button`
  padding: 0.4rem;
  background: ${({theme}) => theme.colors.secondaryColor};
  border: 1px solid ${({theme}) => theme.colors.blueColor};
  color: ${({theme}) => theme.colors.whiteColor};
  border-radius: 5%;
  cursor: pointer;

  &:hover {
    background: ${({theme}) => theme.colors.orangeColor};
    color: ${({theme}) => theme.colors.secondaryColor};
  }
`

export const IconTimes = styled.i`
  padding: 0.2rem;
  margin-left: 0.4rem;
`

export const Filter = styled.div`

`
export const FilterDivider = styled.div`
  width: 50vw;
  ${flex({justify: 'space-around', align: 'center'})};
  flex-wrap: wrap;
`

export const ButtonFilter = styled.button`
  ${flex({justify: 'space-evenly', align: 'center'})};
  background: ${({bg, theme}:{bg:boolean, theme: TTheme}) => bg ? theme.colors.secondaryColor : theme.colors.whiteColor};
  color: ${({bg, theme}) => bg ? theme.colors.whiteColor : theme.colors.secondaryColor};
  width: 5.5rem;
  height: 3rem;
  padding: .4rem;
  border: none;
  border-radius: 10%;
  font-weight: bolder;
`

export const FilterOptionContainer = styled.div`
  margin-top: .2rem;
  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  ${flex({justify: 'space-evenly', align: 'center'})};
  flex-direction: column;
  border: 2px solid ${({theme}) => theme.colors.blueColor};
  color: ${({theme}) => theme.colors.whiteColor};
  height: 25rem;
  width: 20rem;
  border-radius: 3%;
  transition: opacity .4s ease-in;
`

export const FilterInfoContainer = styled.div`
  width: 100vw;
  ${flexCenter};
`

export const RadioContainer = styled.div`
  width: 18rem;
  height: 2rem;
  ${flex({justify: 'flex-start', align: 'center'})};

  &:hover {
    background: ${({theme}) => theme.colors.orangeColor};
    padding: 0 .4rem;
    border-radius: 2rem;
  }
`

export const Label = styled.label`
  font-size: 1rem;
  margin-left: .4rem;
  width: 100%;
`

export const Icon = styled.i`
  font-size: 1em;
`

export const OrdersList = styled.ul`
  color: ${({theme}) => theme.colors.whiteColor};
  margin-top: 2rem;
  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  transition: opacity .4s ease-in;
`

export const UserName = styled.h1`
  color: ${({orange, theme}) => orange ? theme.colors.orangeColor : theme.colors.whiteColor};
  font-size: 1.6em;
`

export const TotalAmount = styled.h2`
  color: ${({orange, theme}) => orange ? theme.colors.orangeColor : theme.colors.whiteColor};
  font-size: 1.4em;
`

export const InfoContainer = styled.div`
  ${flex({justify: 'space-around', align: 'start'})};
  width: 10rem;
  margin: .4rem;
`

export const InputContainer = styled.div`
  ${flex({justify: 'space-around', align: 'center'})};
`

export const Dash = styled.div<TTheme>`
  width: 2rem;
  height: 0;
  border: 1px solid ${({theme}) => theme.colors.secondaryColor};
  display: inline-block;
  margin: 1.5rem .8rem 0 .8rem;
  opacity: .7;
`

export const InputsWithDash = styled.div`
  ${flexCenter};
`

export const InputDateContainer = styled.div`
  ${flexCenter};
  flex-direction: column;

`

export const LabelInput = styled.label`
  margin-bottom: .4rem;
  align-self: start;
  font-size: 1.4em;
`

export const InputDate = styled.input`
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: .6rem;
  padding: 0 .4rem;
  border: ${({error, theme}) => error ? `1px solid ${theme.colors.lighterRedColor}` : null};

  &:focus {
    outline: none;
    border: 2px solid ${({theme}) => theme.colors.greenSuccessColor};
  }
`

export const ButtonApply = styled.button<TTheme>`
  align-self: end;
  margin: 2rem 1rem .4rem 0;
  padding: .8rem 1rem;
  border: none;
  border-radius: 10%;
  background: ${({theme}) => theme.colors.secondaryColor};
  color: ${({theme}) => theme.colors.whiteColor};
  cursor: pointer;

  &:disabled {
    background: ${({theme}) => theme.colors.lighterRedColor};
    cursor: auto;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const ErrorText = styled.p<TTheme>`
  color: ${({theme}) => theme.colors.lighterRedColor};
  font-size: 1em;
  margin-bottom: -.64rem;
`
