import {useEffect, useState} from "react";

import {CustomTable, PageBack, Spinner} from "../../components";


import {useAppSelector,useAppDispatch} from "../../hooks/redux";

import {ROUTER_DATA_ADD} from "../../constants/routers.constants";

import * as S from "./styled"
import {getProducts} from "../../redux/crudSlice";

const Products = () => {
    const {products} = useAppSelector(state => state.crud)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts(currentPage))
    }, [currentPage, dispatch])

    return (
        <>
            {
                products.length > 0 ? (
                    <div>
                        <PageBack/>
                        <S.AddLink to={ROUTER_DATA_ADD}>
                            Add Products
                        </S.AddLink>
                        <CustomTable data={products} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    </div>
                ) : <Spinner/>
            }
        </>
    )
}

export default Products
