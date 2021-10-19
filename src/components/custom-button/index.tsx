import {FC} from "react";

import * as S from "./styled"

interface ICustomButton {
    name?: string
    onclick: () => void
    type?: string
    disabled?: boolean
    bg?: string
}

const CustomButton: FC<ICustomButton> = ({name, onclick, type = 'button', disabled, children, bg}) =>
    <S.Button bg={bg} disabled={disabled} onClick={onclick} type={type}>{name || children}</S.Button>


export default CustomButton