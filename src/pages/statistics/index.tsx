import {useEffect} from "react";

import {DoughnutChart, PageBack, Spinner, ToolTip} from "../../components";

import {useAppDispatch,useAppSelector} from "../../hooks/redux";

import {getOrder} from "../../redux/crudSlice";

import * as S from './styled'

const Statistics = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])

    const {orders} = useAppSelector(state => state.crud)

    return (
        <S.StatisticsContainer>
            <ToolTip position='right' text='home page'>
                <PageBack/>
            </ToolTip>
            {orders.length > 0 ? <DoughnutChart/> : <Spinner/>}
        </S.StatisticsContainer>
    )
}

export default Statistics
