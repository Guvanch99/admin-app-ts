import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {CustomButton, CustomInput, ModalPreview, ModalSuccess, PageBack, Portal} from "../../../components";

import {addNewData} from "../../../redux/crudSlice";

import {isObjectValueEmpty} from "../../../utils";

import {DB} from "../../../core/axios";

import {ALL_PRODUCTS} from "../../../constants/variables";
import {ROUTER_DATA_ADD} from "../../../constants/routers";
import {REGEX_NUMBER} from "../../../constants/regex";

import {DATA} from "../../../data";

import * as S from '../styled'


const {selectOptionType} = DATA

const DataAdd = () => {
    const history = useHistory()

    const [addData, setAddData] = useState({
        name: '',
        src: '',
        description: '',
        price: ''
    })

    const [error, setError] = useState(false)
    const [addDataType, setAddDataType] = useState('combo')
    const [isModalPreview, setIsModalPreview] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
    const dispatch = useDispatch()

    const handleChange = ({target: {name, value}}) => {
        setAddData({...addData, [name]: value})
        setError(false)
    }
    const handleChangeType = ({target: {value}}) => setAddDataType(value)
    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)
    const closeModalSuccess = () => {
        setIsModalSuccess(false)
        history.push(ROUTER_DATA_ADD)
    }
    const createData = (e) => {
        e.preventDefault()
        const {price} = addData
        if (REGEX_NUMBER.test(price)) {
            const newData = {...addData, price: Number(price), addDataType}
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
        <CustomInput key={idx} bg='orangeColor' label={key}
                     type='text'
                     autoComplete='off'
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
                <Portal component={ModalPreview} nameOfClass='modal-preview' toggleModalPreview={toggleModalPreview}
                        data={addData}/> : null}
            {isModalSuccess ?
                <Portal component={ModalSuccess} nameOfClass='modal-success'
                        closeModalSuccess={closeModalSuccess}/> : null}
            <PageBack/>
            <S.FormEdit>
                <S.EditMenuText>Add Menu</S.EditMenuText>
                {error ? <S.ErrorGlobal>Price must be Number</S.ErrorGlobal> : null}
                {Inputs}
                {Select}
                <S.ButtonContainer isPreview={addData.src}>
                    <CustomButton onclick={createData} disabled={isObjectValueEmpty(addData)} name='Submit'
                                  type='submit'/>
                    {addData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                </S.ButtonContainer>
            </S.FormEdit>
        </>
    )
}
export default DataAdd
