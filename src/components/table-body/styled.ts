import styled from "styled-components";

import {handleColorType} from "../../styles/functions.styled";

import {gridJusItems} from "../../styles/mixin.styled";

interface IColor{
  color:string
}

export const Icon = styled.i<IColor>`
  color: ${({color}) => handleColorType(color)};
  font-size: 1.4rem;
  margin-left: 0.2rem;
`

export const TableBodyRowContainer = styled.tr`
  ${gridJusItems({justify: 'center', align: 'center'})};
  grid-template-columns: repeat(4, 1fr);

  &:nth-child(even) {
    background: ${({theme}) => theme.colors.plantColor};
  }
`

export const TableBodyTD = styled.td`
  margin: .5rem 2rem;
  max-width: 13rem;
  width: 10rem;
`
