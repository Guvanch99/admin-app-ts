import {useEffect, useState} from "react";

import {CustomTable, PageBack, Spinner} from "../../components";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {getUsers} from "../../redux/crudSlice";

const Users = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage))
    }, [currentPage,dispatch])

    const {users} = useAppSelector(state => state.crud)

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
