import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {DoughnutChart, PageBack, Spinner, ToolTip} from "../../components";

import {getOrder} from "../../redux/crudSlice";

import * as S from './styled'

const Statistics = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    const {orders} = useSelector(state => state.crud)

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
