//Todo fix
//@ts-nocheck
import {FC} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {CustomButton} from "../index"

import {TData} from "../../model/type";

import {deleteItem} from "../../redux/crudSlice";

import {ROUTER_DATA_EDIT} from "../../constants/routers.constants";

import * as S from "./styled"

const TableBody:FC<TData> = ({data}) => {
    const url = data.url

    const dispatch = useDispatch()

    const handleDelete = (id:number, url:string) => {
        const prop = {id, url}
        dispatch(deleteItem(prop))
    }

    return (
        <tbody>
        {
            data.data.map(({id, name, alt, userName}, idx:number) => (
                <S.TableBodyRowContainer key={idx}>
                    <S.TableBodyTD>{id}</S.TableBodyTD>
                    <S.TableBodyTD>{name || alt || userName}</S.TableBodyTD>
                    <S.TableBodyTD>
                        <NavLink to={{pathname: ROUTER_DATA_EDIT, props: {id, url}}}>
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
