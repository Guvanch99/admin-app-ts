import styled from 'styled-components'

import {gridJusItems} from "../../styles/mixin.styled";
import {flexCenter} from "../../styles/flex.styled";

export const Container = styled.div`
  margin: 2rem;
  ${gridJusItems({justify: 'center', align: 'center'})};
  color: ${({theme}) => theme.colors.whiteColor};
`

export const Button = styled.button`
  margin: 1.6rem 0;
  padding: .4rem .6rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  background: ${({status, theme}) => status ? theme.colors.lighterRedColor : theme.colors.greenSuccessColor};
  color: ${({status, theme}) => status ? theme.colors.whiteColor : theme.colors.plantColor};

  &:hover {
    background: ${({theme}) => theme.colors.secondaryColor};
    color: ${({theme}) => theme.colors.whiteColor};
  }
`

export const Input = styled.input`
  display: none;
`

export const ExcelUploaderText = styled.h1`
  font-size: 3.2em;
  margin: 2rem 0;
`

export const InstructionContainer = styled.div`
  margin: 2rem 0;
  ${gridJusItems({justify: 'start', align: 'center'})};
`

export const DropArea = styled.div`
  width: 60vw;
  height: 60vh;
  border: .2rem ${({isSolidLine}) => isSolidLine ? 'solid' : 'dashed'} ${({theme}) => theme.colors.whiteColor};
  border-radius: 5%;
  border: ${({error, theme}) => error ? `.2rem solid ${theme.colors.lighterRedColor}` : null};
  border: ${({success, theme}) => success ? `.2rem solid ${theme.colors.greenSuccessColor}` : null};
  ${flexCenter};
`

export const DragContainer = styled.div`
  ${gridJusItems({justify: 'center', align: 'center'})};
`

export const DragText = styled.h1`
  font-size: 2.2em;
  color: ${({status, theme}) => status ? theme.colors.lighterRedColor : null};
`

export const Icon = styled.i`
  font-size: ${({big}) => big ? '5rem' : '1rem'};
  color: ${({status, theme}) => status ? theme.colors.lighterRedColor : theme.colors.greenSuccessColor};
`
export const IconSimple=styled.i`
  font-size: ${({big}) => big ? '5rem' : '1rem'};
`
export const DragTextH2=styled.h2`
  font-size: 2em;
`
export const InstructionText = styled.h1`
  font-size: 2.4em;
  margin-bottom: 0.5rem;
`

export const ListContainer = styled.ul`
`

export const List = styled.li`
  margin: 0.6rem 0;
  font-size: 1.6em;
`

export const RulesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RulesText = styled.a`
  margin-left: 1rem;
  color: ${({theme}) => theme.colors.mainColor};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.greenSuccessColor};
  }
`


