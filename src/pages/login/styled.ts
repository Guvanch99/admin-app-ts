import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const Container = styled.div`
  ${grid({justify:'center',align:"center"})};
  height: 100vh;
`

export const Form = styled.form`
  ${grid({justify:'center',align:"center"})};
  padding: 5rem;
  background: rgba(80, 227, 194, .25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, .37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, .18);
`

export const AuthText = styled.h1`
  margin-bottom: 3rem;
  font-size: 4em;
  color: ${({theme})=>theme.colors.whiteColor};
`

export const Error = styled.h1`
  font-size: 2em;
  color: ${({theme}) => theme.colors.lighterRedColor};
  text-align: center;
  margin: 1rem 0;
`

