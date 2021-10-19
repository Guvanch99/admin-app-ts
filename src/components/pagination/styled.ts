import styled from "styled-components";

import {flexCenter} from "../../styles/flex.styled";

export const PaginationContainer = styled.div`
  ${flexCenter};
`

export const PageButtons = styled.button`
  width: 3rem;
  margin: .4rem;
  padding: .4rem;
  border-radius: 10%;
  cursor: pointer;
  border: none;
  background: ${({isActive, theme}) => isActive ? theme.colors.orangeColor : theme.colors.blueColor};
  font-size: 1.6em;
  color: ${({theme}) => theme.colors.whiteColor};

  &:hover {
    background: ${({theme}) => theme.colors.lighterYellowColor};
    color: ${({theme}) => theme.colors.whiteColor};
  }


`


