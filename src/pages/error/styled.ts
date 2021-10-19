import styled from "styled-components";

export const ErrorText=styled.h1`
display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 8em;
  color: ${({theme})=>theme.colors.lighterRedColor};
`

