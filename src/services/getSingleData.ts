import {DB} from '../core/axios'
import {ISingleData} from "../interface/global.interface";

export const getSingleData = ({id, url}: ISingleData) => DB(`${url}/${id}`)