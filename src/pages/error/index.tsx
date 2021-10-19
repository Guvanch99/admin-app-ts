import {memo, useEffect} from "react"
import {useHistory} from "react-router-dom"

import {ROUTER_HOME} from "../../constants/routers.constants"

import * as S from "./styled"


const Error = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push(ROUTER_HOME)
        }, 2000)
    }, [history])

    return (
        <S.ErrorText>Oops something get wrong</S.ErrorText>
    )
}

export default memo(Error)