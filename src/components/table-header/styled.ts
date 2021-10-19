import styled from "styled-components";

import {gridJusItems} from "../../styles/mixin.styled";

export const TReaderRow = styled.tr`
  ${gridJusItems({justify:'center',align:'center'})};
  grid-template-columns: repeat(4, 1fr);
  background: ${({theme}) => theme.colors.blueColor};
`

export const THeadRowHeader = styled.th`
  margin: .5rem 2rem;
`
