import {memo} from "react";
import {useHistory} from "react-router-dom";

import * as S from './styled'

const PageBack=()=>{
    const history=useHistory()
    const goBack=()=>history.goBack()

    return <S.Button onClick={goBack}><S.Icon className="far fa-hand-point-left"/>Go Back</S.Button>

}

export default memo(PageBack)