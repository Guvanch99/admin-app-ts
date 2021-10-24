import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import moment from "moment";

import {IDate, IOrders} from "../../model/interface";

import {EMPTY, LAST_WEEK, MONTH, PERIOD, TODAY, TWO_MONTH, TWO_WEEKS} from "../../constants/variables.constants";

interface IFilteredOrders {
    totalAmount: number
    user: {
        userName: string
    }
}

interface IFilterState {
    sort: string
    allOrders: IOrders[]
    filteredOrders:IFilteredOrders[]
}

const initialState: IFilterState = {
    sort: '',
    allOrders: [],
    filteredOrders: []

}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        onChange(state, {payload: {value}}:PayloadAction<{value:string}>) {
            state.sort = value
        },
        setOrders(state, {payload}:PayloadAction<IOrders[]>) {
            state.allOrders = payload
        },
        filterRemove(state) {
            state.sort = ''
            state.filteredOrders = []
        },
        filterTransactions(state, {payload}: PayloadAction<IDate>) {
            const {allOrders, sort} = state
            let temp = [...allOrders]
            let today:moment.Moment = moment()
            switch (sort) {
                case EMPTY:
                    state.filteredOrders = []
                    break
                case TODAY:
                    let startOfDay:moment.Moment = moment().startOf('day')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(startOfDay, today))
                    state.filteredOrders = temp
                    break
                case LAST_WEEK:
                    let lastWeek:moment.Moment = moment().startOf('day').subtract(1, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastWeek, today))
                    state.filteredOrders = temp
                    break
                case TWO_WEEKS:
                    let lastTwoWeeks:moment.Moment = moment().startOf('day').subtract(2, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastTwoWeeks, today))
                    state.filteredOrders = temp
                    break
                case MONTH:
                    let lastMonth:moment.Moment = moment().startOf('day').subtract(1, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastMonth, today))
                    state.filteredOrders = temp
                    break
                case TWO_MONTH:
                    let TwoWeeks:moment.Moment = moment().startOf('day').subtract(2, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(TwoWeeks, today))
                    state.filteredOrders = temp
                    break
                case PERIOD:
                    const {from, to} = payload
                    let fromMoment:moment.Moment = moment(from.replaceAll('/', ' '), 'DD-MM-YYYY')
                    let toMoment:moment.Moment = moment(to.replaceAll('/', ' '), 'DD-MM-YYYY')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(fromMoment, toMoment))
                    state.filteredOrders = temp
                    break
                default:
                    state.filteredOrders = []
            }

        }
    }
})

export const {onChange, setOrders, filterTransactions, filterRemove} = filterSlice.actions

export default filterSlice.reducer
