import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {useAppSelector} from "../../hooks/redux";

import {getUsers} from "../../redux/crudSlice";

const Users = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage))
  }, [currentPage, dispatch])

  const {status, users} = useAppSelector(state => state.crud)

  return (
    <>
      {
        status ?
          <Spinner/> : (
            <div>
              <PageBack/>
              <CustomTable data={users} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
          )
      }
    </>

  )
}
export default Users
