import {memo} from "react"
import {useDispatch} from "react-redux";

import {logOut} from "../../redux/adminSlice"

import {DATA} from '../../data'

import * as S from "./styled"

const {navLinks} = DATA

const MainNavigation = () => {
    const dispatch = useDispatch()

    const logOutAdmin = () => dispatch(logOut())

    return (
        <S.Menu>
            {
                navLinks.map(({name, url, color}, idx) => (
                    <S.List color={color} key={idx}>
                        <S.Link onClick={idx === 3 ? logOutAdmin : undefined} to={url}>{name}</S.Link>
                    </S.List>
                ))
            }
        </S.Menu>
    )
}


export default memo(MainNavigation)
