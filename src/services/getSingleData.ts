import axios from "axios";

import {IEditData, ISingleData} from "../model/interface";

export const getSingleData = ({id, url}: ISingleData) => axios.get<IEditData>(`http://localhost:5000${url}/${id}`)
