import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {MainNavigation, Spinner} from "../../components"

import {getData} from "../../redux/crudSlice";

import * as S from "./styled";


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const {gallery} = useSelector(state => state.crud)

    return (
        <S.Container>
            {gallery.length > 0 ? <MainNavigation/> : <Spinner/>}
        </S.Container>
    )
}

export default Home
