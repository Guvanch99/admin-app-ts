import {FC} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {CustomButton} from "../index"

import {deleteItem} from "../../redux/crudSlice";

import {ROUTER_DATA_EDIT} from "../../constants/routers.constants";

import * as S from "./styled"

interface IDataProps {
  id: string | number
  name?: string
  alt?: string
  userName?: string
}

interface IData {
  bodyData: {
    url: string
    data: IDataProps[]
  }
}

const TableBody: FC<IData> = ({bodyData}) => {
  const url = bodyData.url

  const dispatch = useDispatch()

  const handleDelete = (id: number | string, url: string) => {
    const prop = {id, url}
    dispatch(deleteItem(prop))
  }

  return (
    <tbody>
    {
      bodyData.data.map(({name, alt, userName, id}, idx: number) => (
        <S.TableBodyRowContainer key={idx}>
          <S.TableBodyTD>{id}</S.TableBodyTD>
          <S.TableBodyTD>{name || userName || alt}</S.TableBodyTD>
          <S.TableBodyTD>
            <NavLink to={{pathname: ROUTER_DATA_EDIT, state: {id, url}}}>
              <S.Icon color='greenSuccessColor' className='fas fa-edit'/>
            </NavLink>
          </S.TableBodyTD>
          <S.TableBodyTD>
            <CustomButton bg onclick={() => handleDelete(id, url)}>
              <S.Icon color='lighterRedColor' className="fas fa-trash"/>
            </CustomButton>
          </S.TableBodyTD>
        </S.TableBodyRowContainer>
      ))
    }
    </tbody>
  )
}

export default TableBody
