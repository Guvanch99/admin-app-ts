import {CustomTable, PageBack} from "../../components"

import {useAppSelector} from "../../hooks/redux";

const FeaturedProducts = () => {
    const {featuredProducts} = useAppSelector(state => state.crud)

    return (
        <>
            <PageBack/>
            <CustomTable data={featuredProducts}/>
        </>
    )
}

export default FeaturedProducts
