import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";

export const Container = styled.div`
  ${flex({justify: 'center', align: 'center'})};
  flex-direction: column;
  margin: 2rem;
`

export const TransactionText = styled.h1`
  font-size: 3em;
  margin-bottom: 3rem;
  color: ${({theme}) => theme.colors.whiteColor};
  text-align: center;
`
