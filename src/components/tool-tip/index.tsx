import {FC,memo} from 'react'
import {useState} from "react";

import * as S from './styled'

interface IToolTip{
    text:string
    position:string
}

const ToolTip:FC<IToolTip> = ({children, text, position}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)

    return (
        <S.Container>
            {isVisible ? <S.ToolTip position={position}>{text}</S.ToolTip> : null}
            <S.TargetElement onMouseEnter={show} onMouseLeave={hide}>
                {children}
            </S.TargetElement>
        </S.Container>
    )
}

export default memo(ToolTip)
