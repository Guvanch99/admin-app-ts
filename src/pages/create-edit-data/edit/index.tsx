//Todo fix
//@ts-nocheck
import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, Portal, ModalSuccess, PageBack} from "../../../components";

import {updateSingleData} from "../../../redux/crudSlice";

import {isObjectValueEmpty} from "../../../utils";

import {getSingleData} from "../../../services/getSingleData";

import {REGEX_NUMBER} from "../../../constants/regex.constants";
import {ROUTER_GALLERY, ROUTER_PRODUCTS} from "../../../constants/routers.constants";

import {ErrorGlobal} from "../styled";

import * as S from '../styled'

const Create:FC = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const [error, setError] = useState(false)
    const [isModalPreview, setIsModalPreview] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
    const [singleData, setSingleData] = useState({})

    const {props: {id, url}} = location

    useEffect(() => {
        getSingleData({id, url}).then(({data}) => setSingleData(data))
    }, [id, url])

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setSingleData({...singleData, [name]: value})
        setError(false)
    }

    const updateData = (e: MouseEvent) => {
        e.preventDefault()
        if ((url === ROUTER_GALLERY)) {
            const props = {id, url, singleData}
            dispatch(updateItem(props))
            setIsModalSuccess(true)
        } else {
            if (REGEX_NUMBER.test(singleData.price) || REGEX_NUMBER.test(singleData.bonus)) {
                const props = {id, url, singleData}
                dispatch(updateSingleData(props))
                setIsModalSuccess(true)
            } else
                setError(true)
        }

    }

    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)

    const closeModalSuccess = (e: MouseEvent) => {
        e.preventDefault()
        setIsModalSuccess(false)
        url === '/all-products' ? history.push(ROUTER_PRODUCTS) : history.push(url)
    }

    const Inputs = Object.keys(singleData).map((key, idx) =>
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
            {isModalPreview ?
                <Portal nameOfClass='modal-preview'>
                    <ModalPreview
                        toggleModalPreview={toggleModalPreview}
                        data={singleData}/>
                </Portal> : null}
            {isModalSuccess ?
                <Portal Component={ModalSuccess} nameOfClass='modal-success'>
                    <ModalSuccess closeModalSuccess={closeModalSuccess} data={singleData}/>
                </Portal> : null}
            <PageBack/>
            <S.FormEdit>
                <S.EditMenuText>Edit Menu</S.EditMenuText>
                {error ? <ErrorGlobal>Price must be Number</ErrorGlobal> : null}
                {Inputs}
                <S.ButtonContainer>
                    <CustomButton onclick={updateData} disabled={isObjectValueEmpty(singleData)} name='Submit'
                                  type='submit'/>
                    {singleData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                </S.ButtonContainer>
            </S.FormEdit>
        </>
    )
}

export default Create
