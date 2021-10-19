import {memo} from "react";

import {CustomButton} from "../../index";

import * as S from '../styled'

interface IModalSuccess {
    closeModalSuccess: () => void
}

const ModalSuccess = ({closeModalSuccess}: IModalSuccess) => (
    <S.ModalWrapper>
        <S.Modal onClick={closeModalSuccess}>
            <S.ModalSuccessLabel>Success</S.ModalSuccessLabel>
            <S.Icon className="far fa-check-circle"/>
            <CustomButton onclick={closeModalSuccess} name='Close'/>
        </S.Modal>
    </S.ModalWrapper>
)


export default memo(ModalSuccess)
