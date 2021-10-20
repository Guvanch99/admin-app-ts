import {memo} from "react"

import {useAppDispatch} from "../../hooks/redux";

import {logOut} from "../../redux/adminSlice"

import {DATA} from '../../data'

import * as S from "./styled"

const {navLinks} = DATA

const MainNavigation = () => {
    const dispatch = useAppDispatch()

    const logOutAdmin = () => dispatch(logOut())

    return (
        <S.Menu>
            {
                navLinks.map(({name, url, color}, idx) => (
                    <S.List color={{background:color}} key={idx}>
                        <S.Link onClick={idx === 3 ? logOutAdmin : null} to={url}>{name}</S.Link>
                    </S.List>
                ))
            }
        </S.Menu>
    )
}


export default memo(MainNavigation)
