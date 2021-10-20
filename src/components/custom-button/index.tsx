import React, {FC} from "react";

import * as S from "./styled"

export interface ICustomButton {
    name?: string
    onclick: () => void | React.ReactNode
    disabled?: boolean|undefined
    bg?: boolean
}

const CustomButton: FC<ICustomButton> = ({name, onclick,  disabled, children, bg=false}) =>
    <S.Button bg={bg} disabled={disabled} type='button' onClick={onclick}>{name || children}</S.Button>


export default CustomButton