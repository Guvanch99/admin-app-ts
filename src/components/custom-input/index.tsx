import * as S from "./styled"
import {ChangeEvent, FC} from "react";

interface ICustomInput {
    name: string
    value: string|number|string[]|undefined
    label: string
    error?: string | null
    type: string
    onChange?: ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    handleBlur?: () => void
    disabled?: boolean
    bg?: string|undefined,
    placeholder?: string|undefined

}

const CustomInput: FC<ICustomInput> = ({
                                           placeholder,
                                           name,
                                           value,
                                           label,
                                           error,
                                           type,
                                           onChange,
                                           required,
                                           handleBlur,
                                           disabled,
                                           bg
                                       }) => (
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
            placeholder={placeholder || label}
            required={required}
            autoFocus={name === 'adminName'}
            onBlur={handleBlur}
            disabled={disabled}
        />

        {error ? <S.Error>{error}</S.Error> : null}
    </S.Container>
)

export default CustomInput
