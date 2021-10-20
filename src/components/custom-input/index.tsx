import * as S from "./styled"
import {FC} from "react";

interface ICustomInput{
    name:string
    value:string
    label:string
    error:string
    type:string
    onChange:()=>void
    required:boolean
    handleBlur:()=>void
    disabled:boolean
    bg?:boolean

}

const CustomInput:FC<ICustomInput> = ({name, value, label, error, type, onChange, required, handleBlur, disabled, bg}) => (
    <S.Container>
        <S.Label htmlFor={name}>
            {label}
        </S.Label>
        <S.Input
            bg={bg}
            layout={error}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            placeholder={label}
            required={required}
            autoFocus={name === 'adminName'}
            onBlur={handleBlur}
            disabled={disabled}
        />

        {error ? <S.Error>{error}</S.Error> : null}
    </S.Container>
)

export default CustomInput
