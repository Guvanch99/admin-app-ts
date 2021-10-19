import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {ROUTER_DATA_ADD} from "../../constants/routers.constants";

import * as S from "./styled"
import {getProducts} from "../../redux/crudSlice";

const Products = () => {
    const {products} = useSelector(state => state.crud)
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

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
