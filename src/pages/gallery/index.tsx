import {CustomTable, PageBack} from "../../components";

import {useAppSelector} from "../../hooks/redux";

const Gallery = () => {
    const {gallery} = useAppSelector(state => state.crud)

    return (
        <div>
            <PageBack/>
            <CustomTable data={gallery}/>
        </div>
    )
}

export default Gallery
