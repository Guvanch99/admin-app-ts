import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";

export const ChartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 2rem;
  ${flex({justify: 'flex-start', align: 'center'})};
  flex-direction: column;
`

export const ChartLabel = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${({theme}) => theme.colors.whiteColor};
`

export const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${({color}) => color};
  margin: 0 1rem;
`

export const InfoContainer = styled.div`
  width: 30vw;
  ${flex({justify: 'space-around', align: 'center'})};
  margin: 2rem 0;
`

export const Info = styled.div`
  ${flex({justify: 'center', align: 'center'})};
  flex-direction: column;
`

export const InfoBox = styled.div`
  width: 5rem;
  ${flex({justify: 'space-around', align: 'center'})};
`

export const InfoLabel = styled.h1`
  opacity: .6;
  margin-bottom: .4rem;
  color: ${({theme}) => theme.colors.whiteColor};
`

export const Money = styled.h3`
  color: ${({theme}) => theme.colors.whiteColor};
`

export const LeftCircle = styled.div`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.whiteColor};
  margin: 0 .4rem;
`

export const RightCircle = styled.div`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin: 0 .4rem;
  background: linear-gradient(90deg, #46C379 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #000084 66%, brown 66%);
`

export const SVG = styled.svg`
  width: 32rem;
  height: 32rem;
  margin-left: 7rem;
`

export const ChartNumber = styled.text`
  font-size: .4em;
  text-align: center;
  transform: translate(-2.6em, -1em);
  fill: ${({theme}) => theme.colors.whiteColor};
`

export const ChartLabelT = styled.text`
  font-size: 0.2em;
  text-transform: uppercase;
  transform: translate(-7em, 0);
  opacity: .4;
  fill: ${({theme}) => theme.colors.whiteColor};
`
export const Circle = styled.circle`
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 1;
`