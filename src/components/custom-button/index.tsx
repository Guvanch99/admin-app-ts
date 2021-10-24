import React, {FC, SyntheticEvent} from "react";

import * as S from "./styled"

export interface ICustomButton {
    name?: string
    onclick?:(e:SyntheticEvent) => void
    disabled?: boolean
    bg?: boolean
}

const CustomButton: FC<ICustomButton> = ({name, onclick,  disabled, children, bg=false}) =>
    <S.Button bg={bg} disabled={disabled} type='button' onClick={onclick}>{name || children}</S.Button>

export default CustomButton
