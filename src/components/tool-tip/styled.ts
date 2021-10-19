import styled from "styled-components";

import {handlePosition} from "../../styles/functions.styled";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`

export const ToolTip:any = styled.span`
  ${({position}:any) => handlePosition(position)};
  position: absolute;
  padding: 1em;
  border-radius: 1%;
  overflow: hidden;
  background-color: #EDEDED;
  font-size: 1em;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px ${({theme}) => theme.colors.grey};
  z-index: 9999;
  height: auto;
  width: auto;
`

export const TargetElement = styled.div`
  cursor: pointer;
`

export const Icon = styled.i`
  font-size: 2em;
  color: ${({theme}) => theme.colors.whiteColor};
`


