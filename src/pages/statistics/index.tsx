import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {DoughnutChart, PageBack, Spinner, ToolTip} from "../../components";

import {getOrders} from "../../redux/crudSlice";

import { useAppSelector} from "../../hooks/redux";

import * as S from './styled'


const Statistics = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    const {status} = useAppSelector(state => state.crud)

    return (
        <>
            {
                status ? <Spinner/> : (
                    <S.StatisticsContainer>
                        <ToolTip position='right' text='home page'>
                            <PageBack/>
                        </ToolTip>
                        <DoughnutChart/>
                    </S.StatisticsContainer>
                )
            }
        </>

    )
}

export default Statistics
