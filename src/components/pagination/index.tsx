import * as S from './styled'

interface IPagination{
    countItems:number
    setCurrentPage:()=>void
    currentPage:number
}

const Pagination = ({countItems, setCurrentPage, currentPage}:IPagination) => {

    let buttons = [...Array(countItems).keys()].map(i =>
        <S.PageButtons
            to='#'
            isActive={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)} key={i}>
            {i + 1}
        </S.PageButtons>)

    return (
        <S.PaginationContainer>
            {buttons}
        </S.PaginationContainer>
    )
}
export default Pagination
