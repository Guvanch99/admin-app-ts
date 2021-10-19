import {useMemo, useState} from "react"
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'

import {CustomInput,CustomButton} from '../../components'

import {loginAdmin, adminError} from "../../redux/adminSlice"

import {ROUTER_HOME} from "../../constants/routers.constants"
import {ADMIN_NAME, ADMIN_PASSWORD} from "../../constants/variables.constants"

import {upperCaseString} from "../../utils"

import * as S from "./styled"

const Login = () => {
    const [adminLogin, setAdminLogin] = useState({
        adminName: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        adminName: '',
        password: ''
    })
    const {adminName, password} = adminLogin

    const history = useHistory()
    const dispatch = useDispatch()
    const {adminNotFound} = useSelector(state => state.admin)
    const isButtonDisabled = !adminName || !password || errors.adminName || errors.password

    const adminValidation = () => adminName.length < 4 ? setErrors({
        ...errors,
        adminName: "length must be more than 4"
    }) : null
    const passwordValidation = () => password.length < 6 ? setErrors({
        ...errors,
        password: "length must be more than 6"
    }) : null

    const LOGIN_DATA = useMemo(
        () => [
            {
                name: 'adminName',
                value: adminName,
                label: 'Admin Name',
                error: errors.adminName,
                type: 'text',
                functionValidation: adminValidation
            },
            {
                name: 'password',
                value: password,
                label: 'Password',
                error: errors.password,
                type: 'password',
                functionValidation: passwordValidation
            }
        ],
        [adminName, password, errors.adminName, errors.password]
    )

    const handleChange = ({target:{value,name}}) => {
        errors[name] && setErrors({...errors, [name]: ''})
        setAdminLogin({...adminLogin, [name]: value})
    }

    const login = (e) => {
        e.preventDefault()
        const adminNameUpperCase = upperCaseString(adminName)
        const passwordUpperCase = upperCaseString(password)
        if (adminNameUpperCase === ADMIN_NAME && passwordUpperCase === ADMIN_PASSWORD) {
            dispatch(loginAdmin())
            history.push(ROUTER_HOME)
        } else
            dispatch(adminError())
    }

    return (
        <S.Container>
            <S.Form>
                <S.AuthText>Authorization</S.AuthText>
                {adminNotFound ? (
                    <S.Error>Invalid adminName or password</S.Error>
                ) : null}
                {LOGIN_DATA.map(
                    ({name, value, label, error, type, functionValidation}, index) => (
                        <CustomInput
                            key={index}
                            name={name}
                            value={value}
                            label={label}
                            error={error}
                            type={type}
                            onChange={handleChange}
                            required={true}
                            handleBlur={functionValidation}
                        />
                    )
                )}
                <CustomButton onclick={login} name='Submit' disabled={isButtonDisabled} type='submit'/>
            </S.Form>
        </S.Container>
    )
}

export default Login