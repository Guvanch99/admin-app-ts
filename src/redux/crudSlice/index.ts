import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";

import {DB} from "../../core/axios";

import {IOrders, ISingleData} from "../../model/interface";

import {
    TDataGet,
    TFeaturedProductsSet,
    TGalleryExtraInfoSet,
    TOrdersGet,
    TProductGet,
    TProductsExtraInfoSet,
    TUserGet,
    TUsersExtraInfoSet
} from "../../model/type";

import {ALL_PRODUCTS, NEXT_ID, ORDERS, PRICE,} from "../../constants/variables.constants";
import {ROUTER_FEATURED_PRODUCTS, ROUTER_GALLERY, ROUTER_USERS} from "../../constants/routers.constants";
import {setOrders} from "../filterSlice";

interface ICRUDState {
    products: TProductsExtraInfoSet
    users: TUsersExtraInfoSet
    featuredProducts: TFeaturedProductsSet
    gallery: TGalleryExtraInfoSet
    orders: IOrders[]
    isModal: boolean
    status: boolean
    error: boolean
}

const initialState: ICRUDState = {
    products: {url: '', data: [], countData: 0},
    users: {url: '', data: [], countData: 0},
    featuredProducts: {url: '', data: []},
    gallery: {url: '', data: []},
    orders: [],
    isModal: false,
    status: false,
    error: false

}

export const getData = createAsyncThunk(
    'crud/getData',
    async () =>
        axios.all([
            DB(ROUTER_FEATURED_PRODUCTS),
            DB(ROUTER_GALLERY)
        ])
)

export const getProducts = createAsyncThunk(
    'crud/getProducts',
    async (currentPage: number) => await DB(`${ALL_PRODUCTS}?_limit=4&_page=${currentPage}`)
)

export const getUsers = createAsyncThunk(
    'crud/getUsers',
    async (currentPage: number) => await DB(`${ROUTER_USERS}?_limit=4&_page=${currentPage}`)
)

export const getOrders = createAsyncThunk(
    'crud/getOrders',
    async (_, {dispatch}) => {
        const {data}: any = await DB(ORDERS)
        dispatch(setOrders(data))
        return data
    }
)

export const deleteItem = createAsyncThunk(
    'crud/delete',
    async ({id, url}: ISingleData, {dispatch}) => {
        await DB.delete(`${url}/${id}`)
        dispatch(deleteData({id, url}))
    }
)

export const updateSingleData = (id: number, url: string, updatedData: object) => {

    const isPrice = updatedData.hasOwnProperty(PRICE)
    isPrice ? DB.patch(`${url}/${id}`, {
        ...updatedData,
        //TODO
        //@ts-ignore
        price: Number(updatedData.price)
    }) : DB.patch(`${url}/${id}`, updatedData)
}


const CrudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        addNewData(state, {payload: {newData}}) {
            const product = {id: state.products.data.length + NEXT_ID, ...newData,}
            state.products.data.push(product)
        },
        getOrders(state, {payload}: PayloadAction<TOrdersGet>) {
            state.orders = payload.data
        },
        deleteData(state, {payload}: PayloadAction<ISingleData>) {
            switch (payload.url) {
                case ROUTER_USERS:
                    state.users = {
                        url: state.users.url,
                        countData: state.users.countData,
                        data: state.users.data.filter(user => user.id !== payload.id)
                    }
                    break
                case ROUTER_GALLERY:
                    state.gallery = {
                        url: state.gallery.url,
                        data: state.gallery.data.filter(gallery => gallery.id !== payload.id)
                    }
                    break
                case ALL_PRODUCTS:
                    state.products = {
                        url: state.products.url,
                        countData: state.products.countData,
                        data: state.products.data.filter(product => product.id !== payload.id)
                    }
                    break
                case ROUTER_FEATURED_PRODUCTS:
                    state.featuredProducts = {
                        url: state.featuredProducts.url,
                        data: state.featuredProducts.data.filter(featuredProduct => featuredProduct.id !== payload.id)
                    }
                    break
                default:
                    return state
            }
        },
    },
    extraReducers: {
        [getData.pending.type]: (state) => {
            state.status = true
            state.error = false
        },
        [getData.fulfilled.type]: (state, {payload}: PayloadAction<TDataGet>) => {
            state.status = false
            state.error = false
            state.featuredProducts = {
                url: payload[0].config.url,
                data: payload[0].data
            }
            state.gallery = {
                url: payload[1].config.url,
                data: payload[1].data
            }
        },
        [getData.rejected.type]: (state) => {
            state.error = true
            state.status = false
        },
        [getProducts.pending.type]: (state) => {
            state.status = true
            state.error = false
        },
        [getProducts.fulfilled.type]: (state, {payload}: PayloadAction<TProductGet>) => {
            state.status = false
            state.error = false
            state.products = {
                url: payload.config.url.split('?')[0],
                data: payload.data,
                countData: Number(payload.headers['x-total-count'])
            }
        },
        [getProducts.rejected.type]: (state) => {
            state.error = true
            state.status = false
        },
        [getUsers.pending.type]: (state) => {
            state.status = true
            state.error = false
        },
        [getUsers.fulfilled.type]: (state, {payload}: PayloadAction<TUserGet>) => {
            state.status = false
            state.error = false
            state.users = {
                url: payload.config.url.split('?')[0],
                data: payload.data,
                countData: Number(payload.headers['x-total-count'])
            }
        },
        [getUsers.rejected.type]: (state) => {
            state.error = true
            state.status = false
        },
        [getOrders.pending.type]: (state) => {
            state.status = true
            state.error = false
        },
        [getOrders.fulfilled.type]: (state, {payload}: PayloadAction<IOrders[]>) => {
            console.log(payload)
            state.status = false
            state.error = false
            state.orders = payload
        },
        [getOrders.rejected.type]: (state) => {
            state.error = true
            state.status = false
        },
    }
})

export const {
    addNewData,
    deleteData
} = CrudSlice.actions

export default CrudSlice.reducer
