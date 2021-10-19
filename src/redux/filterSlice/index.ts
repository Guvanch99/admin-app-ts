import {createSlice} from "@reduxjs/toolkit";

import moment from "moment";

import {CUSTOM_DATE, EMPTY, LAST_WEEK, MONTH, PERIOD, TODAY, TWO_MONTH, TWO_WEEKS} from "../../constants/variables";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        sort: "",
        allOrders: [],
        filteredOrders: []
    },
    reducers: {
        onChange(state, {payload: {value}}) {
            state.sort = value
        },
        setOrders(state, {payload}) {
            state.allOrders = payload.data
        },
        filterRemove(state) {
            state.sort = ''
            state.filteredOrders = []
        },
        filterTransactions(state, {payload}) {
            const {allOrders, sort} = state
            let temp = [...allOrders]
            let today = moment()
            switch (sort) {
                case EMPTY:
                    state.filteredOrders = []
                    break
                case TODAY:
                    let startOfDay = moment().startOf('day')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(startOfDay, today))
                    state.filteredOrders = temp
                    break
                case LAST_WEEK:
                    let lastWeek = moment().startOf('day').subtract(1, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastWeek, today))
                    state.filteredOrders = temp
                    break
                case TWO_WEEKS:
                    let lastTwoWeeks = moment().startOf('day').subtract(2, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastTwoWeeks, today))
                    state.filteredOrders = temp
                    break
                case MONTH:
                    let lastMonth = moment().startOf('day').subtract(1, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastMonth, today))
                    state.filteredOrders = temp
                    break
                case TWO_MONTH:
                    let TwoWeeks = moment().startOf('day').subtract(2, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(TwoWeeks, today))
                    state.filteredOrders = temp
                    break
                case PERIOD:
                    const {from ,to}=payload
                    let fromMoment=moment(from.replaceAll('/',' '),'DD-MM-YYYY')
                    let toMoment=moment(to.replaceAll('/',' '),'DD-MM-YYYY')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(fromMoment, toMoment))
                    state.filteredOrders=temp
                    break
                default:
                    state.filteredOrders = []
            }

        }
    }
})

export const {onChange, setOrders, filterTransactions, filterRemove} = filterSlice.actions

export default filterSlice.reducer