import {useSelector} from "react-redux";

import {ToolTip} from "../index";

import {useAppSelector} from "../../hooks/redux";

import {getTotals} from "../../utils";

import {EXPECTED_INCOME} from "../../constants/variables.constants";

import * as S from './styled'


const DoughnutChart = () => {
    const {orders} = useAppSelector(state => state.crud)

    const circleElements = getTotals(orders)
    const {total, products} = circleElements

    return (
        <S.ChartContainer>
            <S.ChartLabel>Doughnut Chart</S.ChartLabel>
            <S.InfoContainer>
                <S.Info>
                    <S.InfoLabel>Remain</S.InfoLabel>
                    <S.InfoBox>
                        <S.LeftCircle/>
                        <S.Money>$ {EXPECTED_INCOME - total < 0 ? "Completed" : EXPECTED_INCOME - total}</S.Money>
                    </S.InfoBox>
                </S.Info>
                <S.Info>
                    <S.InfoLabel>Earned</S.InfoLabel>
                    <S.InfoBox>
                        <ToolTip position='bottom' text="&#128267;-combo &#128309;-durum &#128308;-beverage">
                            <S.RightCircle/>
                        </ToolTip>

                        <S.Money>$ {total}</S.Money>
                    </S.InfoBox>
                </S.Info>
            </S.InfoContainer>
            <S.SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 50" width="100%" height="100%">
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#C2C8D6"
                        strokeWidth="1"/>
                {
                    products.map(({percent, remain, color, offSet}, idx) => (
                        <S.Circle key={idx} cx="21" cy="21" r="15.91549430918954"
                                  strokeDasharray={`${percent} ${remain}`}
                                  stroke={color} strokeDashoffset={offSet}/>
                    ))
                }
                <g>
                    <S.ChartNumber x='50%' y='50%'>
                        $ {EXPECTED_INCOME}
                    </S.ChartNumber>
                    <S.ChartLabelT x='50%' y='50%'>
                        EXPECTED INCOME
                    </S.ChartLabelT>
                </g>
            </S.SVG>
        </S.ChartContainer>


    )
}

export default DoughnutChart

