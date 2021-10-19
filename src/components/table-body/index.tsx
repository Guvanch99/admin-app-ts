import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {CustomButton} from "../index"

import {deleteItem} from "../../redux/crudSlice";

import {ROUTER_DATA_EDIT} from "../../constants/routers.constants";

import * as S from "./styled"


const TableBody = ({data}) => {
    const url = data[0]

    const dispatch = useDispatch()

    const handleDelete = (id, url) => {
        const prop = {id, url}
        dispatch(deleteItem(prop))
    }

    return (
        <tbody>
        {
            data[1].map(({id, name, alt, userName}, idx) => (
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
