import {IGallery, IOrders, IProduct, IUser} from "../interface";

export type TProductsSet = {
    url: string,
    data: IProduct[]
    countData: number
}
export type TUsersSet = {
    url: string,
    data: IUser[]
    countData: number
}
export type TGallerySet = {
    url: string,
    data: IGallery[]
}
export type TFeaturedProductsSet = {
    url: string
    data: IProduct[]
}
export type TFeaturedProductsGet = {
    config: { url: string }
    data: IProduct[]
}
export type TGalleryGet = {
    config: { url: string }
    data: IGallery[]
}
export type TOrdersGet = {
    data: IOrders[]
}
export type TProductGet = {
    config: { url: string }
    data: IProduct[]
    headers: {
        'x-total-count': string
    }
}
export type TUserGet = {
    config: { url: string }
    data: IUser[]
    headers: {
        'x-total-count': string
    }
}

export type TData= { data:TProductsSet|TGallerySet|TUsersSet|TFeaturedProductsSet }
