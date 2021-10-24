
export interface ISingleData {
    id: number|string
    url: string
}

export interface IProduct {
    id: number
    name: string,
    src: string
    description: string
    price: number
    type: string
}

export interface IGallery {
    id: number
    src: string
    alt: string
}

export interface IUser {
    id: string
    userName: string
    email: string
    password: string
    restrictedPromoCodes: string[]
    bonus: number
}

export interface IUser {
    userName: string
    email: string
}

export interface ICart extends IProduct {
    amount: number
    subTotal: number
}

export interface IGift extends IProduct {
    amount: number
}

export interface IAddress {
    street: string
    house: string
    entrance: string
    storey: string
    payment: string
}

export interface IOrders {
    timeOrder: string
    deliveryTime: string
    user: IUser
    cart: ICart[]
    gift?: IGift[]
    address: IAddress
    totalItems: number
    totalAmount: number
    id: number
}

export interface IDate {
    from: string,
    to: string
}


export interface ICreateData {
    name: string
    src: string
    description: string
    price: string|number
    [key: string]: string | number
}

export interface IEditData{
    id?: number|string
    name?: string,
    src?: string
    description?: string
    price?: number|string
    type?: string
    userName?: string
    email?: string
    password?: string
    restrictedPromoCodes?: string[]
    bonus?: number
    alt?: string
    [key: string]: string | number|string[]|undefined
}
