import {DB} from '../core/axios'
import {ISingleData} from "../model/interface";

export const getSingleData = ({id, url}: ISingleData) => DB(`${url}/${id}`)