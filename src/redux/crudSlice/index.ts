import {createSlice} from "@reduxjs/toolkit";

import {ALL_PRODUCTS, NEXT_ID,} from "../../constants/variables";
import {ROUTER_FEATURED_PRODUCTS, ROUTER_GALLERY, ROUTER_USERS} from "../../constants/routers";

const CrudSlice = createSlice({
    name: 'crud',
    initialState: {
        products: [],
        users: [],
        featuredProducts: [],
        gallery: [],
        isModal: false,
        orders: [],
        state: false
    },
    reducers: {
        addNewData(state, {payload: {newData}}) {
            const product = {id: state.products[1].length + NEXT_ID, ...newData,}
            state.products[1].push(product)
        },
        getUsers() {
        },
        getProducts() {
        },
        getData() {
        },
        getOrder() {
        },
        deleteItem() {
        },
        updateItem() {
        },
        setOrder(state, {payload}) {
            state.orders = payload.data
        },
        setData(state, {payload}) {
            state.featuredProducts = [payload[0].config.url, payload[0].data]
            state.gallery = [payload[1].config.url, payload[1].data]
        },
        setProducts(state, {payload}) {
            state.products = [payload.config.url.split('?')[0], payload.data, payload.headers['x-total-count']]
        },
        setUsers(state, {payload}) {
            state.users =[payload.config.url.split('?')[0], payload.data, payload.headers['x-total-count']]
        },
        deleteData(state, {payload}) {
            switch (payload.url) {
                case ROUTER_USERS:
                    state.users = [state.users[0], state.users[1].filter(user => user.id !== payload.id)]
                    break
                case ROUTER_GALLERY:
                    state.gallery = [state.gallery[0], state.gallery[1].filter(gallery => gallery.id !== payload.id)]
                    break
                case ALL_PRODUCTS:
                    state.products = [state.products[0], state.products[1].filter(product => product.id !== payload.id)]
                    break
                case ROUTER_FEATURED_PRODUCTS:
                    state.featuredProducts = [state.featuredProducts[0], state.featuredProducts[1].filter(featuredProduct => featuredProduct.id !== payload.id)]
                    break
                default:
                    return state
            }
        },
    }
})

export const {
    deleteData,
    addNewData,
    setData,
    getData,
    setOrder,
    getOrder,
    deleteItem,
    updateItem,
    getProducts,
    getUsers,
    setProducts,
    setUsers
} = CrudSlice.actions

export default CrudSlice.reducer
