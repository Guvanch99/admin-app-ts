import {FC,useEffect} from "react";
import {useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components"

import {getFeaturedProducts} from "../../redux/crudSlice";

import {useAppSelector} from "../../hooks/redux";

const FeaturedProducts:FC = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getFeaturedProducts())
    },[dispatch])

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
