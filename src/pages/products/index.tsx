import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {getProducts} from "../../redux/crudSlice";

import {useAppSelector} from "../../hooks/redux";

import {ROUTER_DATA_ADD} from "../../constants/routers.constants";

import * as S from "./styled"


const Products = () => {
    const {products, status} = useAppSelector(state => state.crud)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(currentPage))
    }, [currentPage, dispatch])

    return (
        <>
            {
                status ? <Spinner/> : (
                    <div>
                        <PageBack/>
                        <S.AddLink to={ROUTER_DATA_ADD}>
                            Add Products
                        </S.AddLink>
                        <CustomTable data={products} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    </div>
                )
            }
        </>
    )
}

export default Products
