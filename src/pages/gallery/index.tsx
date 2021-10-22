import {FC} from "react";

import {CustomTable, PageBack, Spinner} from "../../components";

import {useAppSelector} from "../../hooks/redux";


const Gallery:FC = () => {
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
