import {memo} from "react"

import * as S from "./styled"

const Spinner = () => <S.SpinnerContainer><S.Loader/></S.SpinnerContainer>

export default memo(Spinner)
