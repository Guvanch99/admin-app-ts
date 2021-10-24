import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

import {DB} from "../../core/axios";

import {IEditData, IOrders, ISingleData} from "../../model/interface";

import {
    TFeaturedProductsGet,
    TFeaturedProductsSet,
    TGallerySet, TGalleryGet,
    TOrdersGet,
    TProductGet,
    TProductsSet,
    TUserGet,
    TUsersSet
} from "../../model/type";

import {ALL_PRODUCTS, NEXT_ID, ORDERS, PRICE,} from "../../constants/variables.constants";
import {ROUTER_FEATURED_PRODUCTS, ROUTER_GALLERY, ROUTER_USERS} from "../../constants/routers.constants";
import {setOrders} from "../filterSlice";

interface ICRUDState {
    products: TProductsSet
    users: TUsersSet
    featuredProducts: TFeaturedProductsSet
    gallery: TGallerySet
    orders: IOrders[]
    isModal: boolean
    status: boolean
}

const initialState: ICRUDState = {
    products: {url: '', data: [], countData: 0},
    users: {url: '', data: [], countData: 0},
    featuredProducts: {url: '', data: []},
    gallery: {url: '', data: []},
    orders: [],
    isModal: false,
    status: false
}

export const getGallery = createAsyncThunk(
    'crud/getGallery',
    async () => DB(ROUTER_GALLERY)
)

export const getFeaturedProducts = createAsyncThunk(
    'crud/getFeaturedProducts',
    async () => DB(ROUTER_FEATURED_PRODUCTS)
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
        const {data} = await axios.get<IOrders[]>(`http://localhost:5000${ORDERS}`)
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

export const updateSingleData = (id: string | number, url: string, singleData: IEditData) => {
    const isPrice = singleData.hasOwnProperty(PRICE)
    isPrice ? DB.patch(`${url}/${id}`, {
        ...singleData,
        price: Number(singleData.price)
    }) : DB.patch(`${url}/${id}`, singleData)
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
            const {users, products, gallery, featuredProducts} = state
            switch (payload.url) {
                case ROUTER_USERS:
                    users.data = users.data.filter(user => user.id !== payload.id)
                    break
                case ROUTER_GALLERY:
                    gallery.data = gallery.data.filter(gallery => gallery.id !== payload.id)
                    break
                case ALL_PRODUCTS:
                    products.data = products.data.filter(product => product.id !== payload.id)
                    break
                case ROUTER_FEATURED_PRODUCTS:
                    state.featuredProducts.data = featuredProducts.data.filter(featuredProduct => featuredProduct.id !== payload.id)
                    break
                default:
                    return state
            }
        },
    },
    extraReducers: {
        [getFeaturedProducts.pending.type]: (state) => {
            state.status = true
        },
        [getFeaturedProducts.fulfilled.type]: (state, {payload}: PayloadAction<TFeaturedProductsGet>) => {
            state.status = false
            state.featuredProducts = {
                url: payload.config.url,
                data: payload.data
            }
        },
        [getGallery.pending.type]: (state) => {
            state.status = true
        },
        [getGallery.fulfilled.type]: (state, {payload}: PayloadAction<TGalleryGet>) => {
            state.status = false
            state.gallery = {
                url: payload.config.url,
                data: payload.data
            }
        },
        [getProducts.pending.type]: (state) => {
            state.status = true
        },
        [getProducts.fulfilled.type]: (state, {payload}: PayloadAction<TProductGet>) => {
            state.status = false
            state.products = {
                url: payload.config.url.split('?')[0],
                data: payload.data,
                countData: Number(payload.headers['x-total-count'])
            }
        },
        [getUsers.pending.type]: (state) => {
            state.status = true
        },
        [getUsers.fulfilled.type]: (state, {payload}: PayloadAction<TUserGet>) => {
            state.status = false
            state.users = {
                url: payload.config.url.split('?')[0],
                data: payload.data,
                countData: Number(payload.headers['x-total-count'])
            }
        },
        [getOrders.pending.type]: (state) => {
            state.status = true
        },
        [getOrders.fulfilled.type]: (state, {payload}: PayloadAction<IOrders[]>) => {
            state.status = false
            state.orders = payload
        },
    }
})

export const {
    addNewData,
    deleteData
} = CrudSlice.actions

export default CrudSlice.reducer
