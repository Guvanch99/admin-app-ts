import {useSelector} from "react-redux";
import {CustomTable, PageBack} from "../../components";

const Gallery = () => {
    const {gallery} = useSelector(state => state.crud)

    return (
        <div>
            <PageBack/>
            <CustomTable data={gallery}/>
        </div>
    )
}

export default Gallery