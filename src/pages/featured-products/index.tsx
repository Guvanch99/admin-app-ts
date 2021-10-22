//Todo fix
// @ts-nocheck
import {FC} from "react";

import {CustomTable, PageBack, Spinner} from "../../components"

import {useAppSelector} from "../../hooks/redux";


const FeaturedProducts:FC = () => {
    const {status, featuredProducts} = useAppSelector(state => state.crud)

    return (
        <>
            {
                status ? <Spinner/> : (
                    <>
                        <PageBack/>
                        <CustomTable data={featuredProducts}/>
                    </>
                )
            }
        </>

    )
}

export default FeaturedProducts
