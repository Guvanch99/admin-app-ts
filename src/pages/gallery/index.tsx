import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {getGallery} from "../../redux/crudSlice";

import {useAppSelector} from "../../hooks/redux";

const Gallery: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGallery())
    }, [])

    const {status, gallery} = useAppSelector(state => state.crud)

    return (
        <>
            {
                status ? <Spinner/> : (
                    <>
                        <PageBack/>
                        <CustomTable data={gallery}/>
                    </>
                )
            }
        </>
    )
}

export default Gallery
