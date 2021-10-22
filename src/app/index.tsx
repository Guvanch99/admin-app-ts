import {Route, Switch} from "react-router-dom"
import {ThemeProvider} from "styled-components"

import {
    Login,
    Error,
    Home,
    Users,
    Products,
    Gallery,
    FeaturedProducts,
    DataEdit,
    Statistics,
    DataAdd,
    FileUpload,
    Transaction
} from '../pages'

import {PrivateRoute} from "../components"

import {
    ROUTER_LOGIN,
    ROUTER_USERS,
    ROUTER_PRODUCTS,
    ROUTER_HOME,
    ROUTER_ERROR,
    ROUTER_FEATURED_PRODUCTS,
    ROUTER_GALLERY,
    ROUTER_DATA_EDIT,
    ROUTER_STATISTICS,
    ROUTER_DATA_ADD,
    ROUTER_FILE_UPLOAD,
    ROUTER_TRANSACTIONS
} from "../constants/routers.constants";

import {theme} from "../styles/Theme.styled";
import {GlobalStyles} from "../styles/Global.styled";

import * as S from "./styled";

const privateRoutes = [
    {
        path: ROUTER_HOME,
        children: <Home/>
    },
    {
        path: ROUTER_PRODUCTS,
        children: <Products/>
    },
    {
        path: ROUTER_USERS,
        children: <Users/>
    },
    {
        path: ROUTER_FEATURED_PRODUCTS,
        children: <FeaturedProducts/>
    },
    {
        path: ROUTER_GALLERY,
        children: <Gallery/>
    },
    {
        path: ROUTER_DATA_EDIT,
        children: <DataEdit/>
    },
    {
        path: ROUTER_DATA_ADD,
        children: <DataAdd/>
    },
    {
        path: ROUTER_STATISTICS,
        children: <Statistics/>
    },
    {
        path: ROUTER_FILE_UPLOAD,
        children: <FileUpload/>
    },
    {
        path: ROUTER_TRANSACTIONS,
        children: <Transaction/>
    }

]

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <S.Container>
            <Switch>
                {
                    privateRoutes.map(({path, children}, idx) => (
                        <PrivateRoute key={idx} exact path={path}>
                            {children}
                        </PrivateRoute>
                    ))
                }
                <Route exact path={ROUTER_LOGIN} component={Login}/>
                <Route path={ROUTER_ERROR} component={Error}/>
            </Switch>
        </S.Container>
    </ThemeProvider>

)

export default App