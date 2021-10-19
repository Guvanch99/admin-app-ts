import styled from "styled-components";

import {flexCenter} from "../../styles/flex.styled";

export const CustomTableContainer = styled.div`
  margin-top: 2rem;
  ${flexCenter};
  flex-direction: column;

  &:first-child {
    margin-top: 0.2rem;
  }
`

export const Table = styled.table`
  max-width: 70rem;
  min-height: 25rem;
  font-size: 2em;
  text-align: center;
  border-collapse: collapse;
  margin: 4rem auto;
  color: ${({theme}) => theme.colors.whiteColor};

`