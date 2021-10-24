import * as S from './styled'

interface IPagination{
    countItems:number
    currentPage:number
    setCurrentPage:((value:number) => void)
}

const Pagination = ({countItems, setCurrentPage, currentPage}:IPagination) => {

    let buttons = Array.from(Array(countItems).keys()).map(i =>
        <S.PageButtons
            isActive={currentPage === i + 1}
            onClick={ () =>  setCurrentPage(i + 1)} key={i}>
            {i + 1}
        </S.PageButtons>)

    return (
        <S.PaginationContainer>
            {buttons}
        </S.PaginationContainer>
    )
}
export default Pagination
