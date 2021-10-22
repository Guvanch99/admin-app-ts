import {useEffect} from "react"
import {useDispatch} from "react-redux";

import {MainNavigation, Spinner} from "../../components"

import { useAppSelector} from "../../hooks/redux";

import {getData} from "../../redux/crudSlice";

import * as S from "./styled";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const {status} = useAppSelector(state => state.crud)

    return (
        <S.Container>
            {status ? <Spinner/> : <MainNavigation/>}
        </S.Container>
    )
}

export default Home
