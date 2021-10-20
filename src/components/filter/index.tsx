import {ChangeEvent, memo, useEffect, useMemo, useState} from "react";
import moment from "moment";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {getOrder} from "../../redux/crudSlice";

import {onChange, filterTransactions, filterRemove} from "../../redux/filterSlice";

import {insertSlash} from "../../utils";

import {DATA} from "../../data";

import {PERIOD} from "../../constants/variables.constants";

import * as S from './styled'


const {filterOptions} = DATA

interface IDate{
    from :string,
    to:string
}

interface IDateError extends IDate{
both:string
}

const Filter = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState<boolean>(false)
    const [inputDate, setInputDate] = useState<IDate>({
        from: '',
        to: ''
    })
    const [errors, setErrors] = useState<IDateError>({
        from: '',
        to: '',
        both: ''
    })
    const [tag, setTag] = useState<boolean>(false)
    const {sort, filteredOrders} = useAppSelector(state => state.filter)

    const dispatch = useAppDispatch()

    const {from, to} = inputDate
    const {both} = errors

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])

    const updateSort = ({target: {value}}:ChangeEvent<HTMLInputElement>) => {
        dispatch(onChange({value}))
        setErrors({
            from: '',
            to: '',
            both: ''
        })

    }
    const toggleVisible = () => setIsVisibleFilter(!isVisibleFilter)
    const apply = () => {
        setTag(true)
        dispatch(filterTransactions({from, to}))
    }
    const handleChange = ({target: {value, name}}:ChangeEvent<HTMLInputElement>) => {
        let slashedValue = insertSlash(value)
        setErrors({
            from: '',
            to: '',
            both: ''
        })
        setInputDate({...inputDate, [name]: slashedValue})
    }
    const filterRemoveHandler = () => {
        setTag(false)
        setInputDate({
            from: '',
            to: ''
        })
        dispatch(filterRemove())
    }
    const dateFromChecker = () => {
        const fromDate = moment(from, "DD-MM-YYYY")
        const today = moment()

        if (!fromDate.isValid() || !(fromDate <= today)) {
            setErrors({
                ...errors,
                from: "Invalid Date From "
            })
        }
    }
    const dateToChecker = () => {
        const fromDate = moment(from, "DD-MM-YYYY")
        const toDate = moment(to, "DD-MM-YYYY")
        const today = moment()
        const isAfter = moment(fromDate).isAfter(toDate);
        const isSame = moment(fromDate).isSame(toDate)
        if (!fromDate.isValid() || !(toDate <= today))
            setErrors({
                ...errors,
                to: "Invalid Date To "
            })
        else if (isAfter)
            setErrors({
                ...errors,
                both: "From is bigger than To"
            })
        else if (isSame)
            setErrors({
                ...errors,
                both: "Dates are Same"
            })

    }
    const isSortEmpty = () => {
        if (!sort)
            return true
        else if (errors.from || errors.both || errors.to)
            return true
        else if (sort === PERIOD) {
            if (!to || !from)
                return true
        }
        return false
    }

    const INPUT_DATA = useMemo(
        () => [
            {
                name: 'from',
                value: from,
                label: 'From',
                error: errors.from,
                functionValid: dateFromChecker
            },
            {
                name: 'to',
                value: to,
                label: 'To',
                error: errors.to,
                functionValid: dateToChecker
            }
        ],
        [from, to, errors.from, errors.to]
    )

    return (
        <S.Filter>
            <S.Tag isVisible={tag}>
                <S.TagButton onClick={filterRemoveHandler}>
                    {`${sort} ${from}-${to}`}
                    <S.IconTimes className="fas fa-times"/>
                </S.TagButton>
            </S.Tag>
            <S.FilterDivider>
                <div>
                    <S.ButtonFilter bg={isVisibleFilter} onClick={toggleVisible}>
                        Date
                        <S.Icon className={`fas fa-sort-${isVisibleFilter ? 'up' : 'down'}`}/>
                    </S.ButtonFilter>
                    <S.FilterOptionContainer isVisible={isVisibleFilter}>
                        {filterOptions.map((name) => (
                            <S.FilterInfoContainer key={name}>
                                <S.RadioContainer>
                                    <input
                                        value={name}
                                        name='day'
                                        id={name}
                                        type='radio'
                                        onChange={updateSort}
                                        checked={sort === name}
                                    />
                                    <S.Label htmlFor={name}>{name}</S.Label>
                                </S.RadioContainer>
                            </S.FilterInfoContainer>
                        ))}
                        {
                            sort === PERIOD ? (
                                <S.InputContainer>
                                    {
                                        INPUT_DATA.map(({name, value, label, error, functionValid}, idx) => (
                                            <S.InputsWithDash key={idx}>
                                                <S.InputDateContainer>
                                                    <S.LabelInput>{label}</S.LabelInput>
                                                    <S.InputDate name={name}
                                                                 value={value}
                                                                 onChange={handleChange}
                                                                 type='text'
                                                                 min={0}
                                                                 max={9}
                                                                 maxLength={10}
                                                                 placeholder="DD/MM/YYYY"
                                                                 onBlur={functionValid}
                                                                 error={error||both}
                                                    />
                                                    {error ? <S.ErrorText>{error}</S.ErrorText> : null}
                                                </S.InputDateContainer>
                                                {idx === 0 ? <S.Dash/> : null}
                                            </S.InputsWithDash>
                                        ))
                                    }

                                </S.InputContainer>
                            ) : null
                        }
                        {both ? <S.ErrorText>{both}</S.ErrorText> : null}
                        <S.ButtonApply onClick={apply} disabled={isSortEmpty()}>
                            Apply
                        </S.ButtonApply>
                    </S.FilterOptionContainer>
                </div>
                <S.OrdersList isVisible={filteredOrders.length > 0}>
                    <S.InfoContainer>
                        <S.UserName orange>Name:</S.UserName>
                        <S.TotalAmount orange>Money:</S.TotalAmount>
                    </S.InfoContainer>
                    {
                        filteredOrders.map(({totalAmount, user: {userName}}, idx) => (
                                <S.InfoContainer key={idx}>
                                    <S.UserName>{userName}</S.UserName>
                                    <S.TotalAmount>{totalAmount} rub</S.TotalAmount>
                                </S.InfoContainer>

                            )
                        )
                    }
                </S.OrdersList>
            </S.FilterDivider>
        </S.Filter>
    )
}

export default memo(Filter)
