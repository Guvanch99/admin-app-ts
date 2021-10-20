import {useEffect} from "react"

import {MainNavigation, Spinner} from "../../components"

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {getData} from "../../redux/crudSlice";

import * as S from "./styled";

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const {gallery} = useAppSelector(state => state.crud)

    return (
        <S.Container>
            {gallery.length > 0 ? <MainNavigation/> : <Spinner/>}
        </S.Container>
    )
}

export default Home
