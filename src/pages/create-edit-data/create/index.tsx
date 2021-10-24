import {ChangeEvent, FC, SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, ModalSuccess, Portal} from "../../../components";

import {addNewData} from "../../../redux/crudSlice";

import {isObjectValueEmpty} from "../../../utils";

import {DB} from "../../../core/axios";

import {ICreateData} from "../../../model/interface";

import {ALL_PRODUCTS} from "../../../constants/variables.constants";
import {ROUTER_DATA_ADD} from "../../../constants/routers.constants";
import {REGEX_NUMBER} from "../../../constants/regex.constants";

import {DATA} from "../../../data";

import * as S from '../styled'

const {selectOptionType} = DATA

const DataAdd:FC = () => {
    const history = useHistory()

    const [addData, setAddData] = useState<ICreateData>({
        name: '',
        src: '',
        description: '',
        price: ''
    })

    const [error, setError] = useState<boolean>(false)
    const [addDataType, setAddDataType] = useState<string>('combo')
    const [isModalPreview, setIsModalPreview] = useState<boolean>(false)
    const [isModalSuccess, setIsModalSuccess] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setAddData({...addData, [name]: value})
        setError(false)
    }
    const handleChangeType = ({target: {value}}: ChangeEvent<HTMLSelectElement>) => setAddDataType(value)
    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)
    const closeModalSuccess = () => {
        setIsModalSuccess(false)
        history.push(ROUTER_DATA_ADD)
    }
    const createData = (e: SyntheticEvent) => {
        e.preventDefault()
        const {price} = addData
        if (REGEX_NUMBER.test(price.toString())) {
            const newData = {...addData, price: Number(price), type:addDataType}
            setIsModalSuccess(true)
            DB.post(ALL_PRODUCTS, newData).then(() => dispatch(addNewData({newData})))
            setAddData({
                name: '',
                src: '',
                description: '',
                price: ''
            })
            setAddDataType('combo')
        } else
            setError(true)

    }
    const Inputs = Object.keys(addData).map((key, idx) =>
        <CustomInput key={idx} bg='orangeColor'
                     label={key}
                     type='text'
                     name={key}
                     value={addData[key]}
                     placeholder={`Enter a ${key}`}
                     onChange={handleChange}/>
    )

    const Select = <S.Select onChange={handleChangeType} value={addDataType} name="type">
        {selectOptionType.map((name, index) => (
            <option key={index} value={name}>
                {name}
            </option>
        ))}
    </S.Select>

    return (
        <>
            {isModalPreview ?
                <Portal nameOfClass='modal-preview'>
                    <ModalPreview
                        toggleModalPreview={toggleModalPreview}
                        data={addData}/>
                </Portal> : null}
            {isModalSuccess ?
                <Portal  nameOfClass='modal-success'>
                    <ModalSuccess
                        closeModalSuccess={closeModalSuccess}/>
                </Portal> : null}
            <S.FormEdit>
                <S.EditMenuText>Add Menu</S.EditMenuText>
                {error ? <S.ErrorGlobal>Price must be Number</S.ErrorGlobal> : null}
                {Inputs}
                {Select}
                <S.ButtonContainer isPreview={addData.src}>
                    <CustomButton onclick={createData} disabled={isObjectValueEmpty(addData)} name='Submit'/>
                    {addData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                </S.ButtonContainer>
            </S.FormEdit>
        </>
    )
}
export default DataAdd
