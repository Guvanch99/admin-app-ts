import {useSelector} from "react-redux"
import {CustomTable, PageBack} from "../../components"

const FeaturedProducts = () => {
    const {featuredProducts} = useSelector(state => state.crud)

    return (
        <>
            <PageBack/>
            <CustomTable data={featuredProducts}/>
        </>
    )
}

export default FeaturedProducts