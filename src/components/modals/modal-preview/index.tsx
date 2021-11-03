import {FC, memo} from 'react'

import {CustomButton} from "../../index";

import {IEditData} from "../../../model/interface";

import {THREE} from "../../../constants/variables.constants";

import * as S from '../styled'

interface IModalPreview {
  toggleModalPreview: () => void
  data: IEditData
}

const ModalPreview: FC<IModalPreview> = ({data, toggleModalPreview}) => {
  const objectLength = Object.keys(data).length
  const {name, src, price, description} = data

  return (
    <S.ModalWrapper>
      <S.Modal onClick={toggleModalPreview}>
        <S.FlexContainer>
          <S.Image src={src} alt={name}/>
          {objectLength > THREE ? (
            <S.ModalPreviewInfo>
              <S.ModalPreviewName>Name: {name}</S.ModalPreviewName>
              <S.ModalPreviewPrice>Price: {price} rub </S.ModalPreviewPrice>
              <S.ModalPreviewDescription>Description: {description}</S.ModalPreviewDescription>
            </S.ModalPreviewInfo>
          ) : null}
        </S.FlexContainer>
        <CustomButton onclick={toggleModalPreview} name='Close'/>
      </S.Modal>

    </S.ModalWrapper>
  )
}
export default memo(ModalPreview)
