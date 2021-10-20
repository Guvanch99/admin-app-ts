import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {grid} from "../../styles/mixin.styled";

import {IColor} from "../../interface/theme.interface";

interface IList {
    color: string
}

interface ILink {
    theme: IColor
}

export const Menu = styled.ul`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-items: center;
  grid-gap: 2rem;
`

export const List = styled.li<IList>`
  ${grid({justify: 'center', align: 'center'})}
  width: 12rem;
  height: 12rem;
  margin: 1rem;
  border-radius: 5%;
  background: ${({color}) => color};
  transition: transform .4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const Link = styled(NavLink)<ILink>`
  ${grid({justify: 'center', align: "center"})};
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  color: ${({theme}) => theme.colors.whiteColor};
  font-size: 1.8em;
`




