export interface ISingleData {
    id: number
    url: string
}

export interface IProducts {
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

export interface IUsers {
    id: string
    userName: string
    email: string
    password: string
    restrictedPromoCodes: string[]
    bonus: number
}

export interface IUser{
    userName:string
    email:string
}
export interface ICart extends IProducts{
    amount:number
    subTotal:number
}

export interface IGift extends IProducts{
    amount:number
}

export interface IAddress{
    street:string
    house:string
    entrance:string
    storey:string
    payment:string
}

export interface IOrders {
timeOrder:string
    deliveryTime:string
    user:IUser
    cart:ICart[]
    gift?:IGift[]
    address:IAddress
    totalItems:number
    totalAmount:number
    id:number
}
