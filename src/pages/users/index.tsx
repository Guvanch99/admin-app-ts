import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {getUsers} from "../../redux/crudSlice";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage))
    }, [currentPage,dispatch])

    const {users} = useSelector(state => state.crud)

    return (
        <>
            {
                users.length > 0 ? (
                    <div>
                        <PageBack/>
                        <CustomTable data={users} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    </div>
                ) : <Spinner/>
            }
        </>

    )
}
export default Users
