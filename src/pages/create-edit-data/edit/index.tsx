import {ChangeEvent, FC, SyntheticEvent, useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, Portal, ModalSuccess} from "../../../components";

import {updateSingleData} from "../../../redux/crudSlice";

import {isObjectValueEmpty} from "../../../utils";

import {getSingleData} from "../../../services/getSingleData";

import {IEditData, ISingleData} from "../../../model/interface";

import {REGEX_NUMBER} from "../../../constants/regex.constants";
import {ROUTER_GALLERY, ROUTER_PRODUCTS} from "../../../constants/routers.constants";

import {ErrorGlobal} from "../styled";

import * as S from '../styled'

const Create: FC = () => {
  const {state} = useLocation<ISingleData>()
  const history = useHistory()

  const [error, setError] = useState<boolean>(false)
  const [isModalPreview, setIsModalPreview] = useState<boolean>(false)
  const [isModalSuccess, setIsModalSuccess] = useState<boolean>(false)
  const [singleData, setSingleData] = useState<IEditData>()

  const {id, url} = state

  useEffect(() => {
    getSingleData({id, url}).then(({data}) => setSingleData(data))
  }, [id, url])

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    setSingleData({...singleData, [name]: value})
    setError(false)
  }

  const updateData = (e: SyntheticEvent) => {
    e.preventDefault()
    if (singleData)
      if ((url === ROUTER_GALLERY)) {
        singleData && updateSingleData(id, url, singleData)
        setIsModalSuccess(true)
      } else {
        if ((singleData.price && REGEX_NUMBER.test(singleData.price.toString())) ||
          (singleData.bonus && REGEX_NUMBER.test(singleData.bonus.toString()))) {
          singleData && updateSingleData(id, url, singleData)
          setIsModalSuccess(true)
        } else
          setError(true)
      }
  }

  const toggleModalPreview = () => setIsModalPreview(!isModalPreview)

  const closeModalSuccess = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsModalSuccess(false)
    url === '/all-products' ? history.push(ROUTER_PRODUCTS) : history.push(url)
  }

  const Inputs = singleData && Object.keys(singleData).map((key, idx) =>
    <CustomInput key={idx} bg='orangeColor'
                 label={key}
                 disabled={key === 'id'}
                 type='text'
                 name={key}
                 value={singleData[key]}
                 placeholder={`Enter a ${key}`}
                 onChange={handleChange}/>
  )

  return (
    <>
      {(isModalPreview && singleData) ?
        <Portal nameOfClass='modal-preview'>
          <ModalPreview
            toggleModalPreview={toggleModalPreview}
            data={singleData}/>
        </Portal> : null}
      {isModalSuccess ?
        <Portal nameOfClass='modal-success'>
          <ModalSuccess
            closeModalSuccess={closeModalSuccess}/>
        </Portal> : null}
      <S.FormEdit>
        <S.EditMenuText>Edit Menu</S.EditMenuText>
        {error ? <ErrorGlobal>Price must be Number</ErrorGlobal> : null}
        {Inputs}
        <S.ButtonContainer isPreview={!!singleData?.src}>
          <CustomButton onclick={updateData} disabled={singleData ? isObjectValueEmpty(singleData) : false}
                        name='Submit'/>
          {singleData?.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
        </S.ButtonContainer>
      </S.FormEdit>
    </>
  )
}

export default Create
