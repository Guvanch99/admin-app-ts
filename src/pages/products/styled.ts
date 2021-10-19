import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {grid} from "../../styles/mixin.styled";

export const AddLink = styled(NavLink)`
  ${grid({justify: 'center', align: 'center'})};
  font-size: 2rem;
  color: ${({theme}) => theme.colors.blueColor};
  margin: 2rem 0;

  &:hover {
    font-size: 2.6rem;
    color: ${({theme}) => theme.colors.orangeColor};
  }
`


