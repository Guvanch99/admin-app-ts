import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {useAppSelector} from "../../hooks/redux";

import {ROUTER_LOGIN} from '../../constants/routers.constants'

const PrivateRoute = ({children, ...rest}: any) => {
  // const { isAdmin } = useAppSelector(state => state.admin)
  return (
    <Route
      {...rest}
      render={() => (true ? children : <Redirect to={ROUTER_LOGIN}/>)}
    />
  )
}

export default PrivateRoute
