import {IGallery, IOrders, IProduct, IUser} from "../interface";

export type TProductsExtraInfoSet = {
    url: string,
    data: IProduct[]
    countData: number
}
export type TUsersExtraInfoSet = {
    url: string,
    data: IUser[]
    countData: number
}
export type TGalleryExtraInfoSet = {
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
export type TDataGet = {
    0: TFeaturedProductsGet
    1: TGalleryGet
}
export type TData= { data:TProductsExtraInfoSet|TGalleryExtraInfoSet|TUsersExtraInfoSet|TFeaturedProductsSet }