import {
    FIRST_SEGMENT_OFF_SET,
    HUNDRED_PERCENT,
} from "../constants/variables.constants";
import {REGEX_AFTER_DAY_SLASH, REGEX_AFTER_MONTH_SLASH} from "../constants/regex.constants";

export const upperCaseString = (str:string) => str.trim().toUpperCase()

export const isObjectEmpty = (obj:object )=> Object.keys(obj).length === 0;

export const isObjectValueEmpty =(obj:object ) => Object.values(obj).some(x => x === '');

export const biteToMb = (number:number) => (number / Math.pow(1024, 2)).toFixed(2)


export const insertSlash = (data:string) => data.replace(REGEX_AFTER_DAY_SLASH, '$1/$2').replace(REGEX_AFTER_MONTH_SLASH, '$1/$2')

export const getTotals = (orders:[]) => {
    //taking all carts from orders and flatting array and get all types from array after with Set get unique values
    const uniqueTypes = Array.from(new Set(orders.map(({cart}) => cart).flat().map(({type}) => type)))

    const objectDefault = uniqueTypes.reduce((acc, curr) => {
        acc[curr] = 0
        return acc
    }, {});
    const subTotalTypes = orders.map(({cart}) => cart.reduce(
        (subType, {type, subTotal}) => {
            subType[type] += subTotal
            return subType
        }, objectDefault))

    const uniqueSubtotal = Array.from(new Set(subTotalTypes))
    let arrayToObject = Object.assign({}, uniqueSubtotal[0]);
    let percents = Object.keys(arrayToObject).reduce((percent, type) => {
        percent[type] = arrayToObject[type] * 1 / 5
        return percent
    }, objectDefault)

    const {combo, durum, beverage} = percents

    const total = arrayToObject.combo + arrayToObject.durum + arrayToObject.beverage

    return {
        total,
        products: [
            {
                percent: combo,
                remain: HUNDRED_PERCENT - combo,
                color: '#46C379',
                offSet: FIRST_SEGMENT_OFF_SET,
            },
            {
                percent: durum,
                remain: HUNDRED_PERCENT - durum,
                color: '#000084',
                offSet: HUNDRED_PERCENT - combo + FIRST_SEGMENT_OFF_SET,
            },
            {
                percent: beverage,
                remain: HUNDRED_PERCENT - beverage,
                color: 'brown',
                offSet: HUNDRED_PERCENT - (combo + durum) + FIRST_SEGMENT_OFF_SET,
            }
        ]
    }
}

