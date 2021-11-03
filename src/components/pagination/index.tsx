import * as S from './styled'

interface IPagination {
  countItems: number
  currentPage: number
  setCurrentPage: ((value: number) => void)
}

const Pagination = ({countItems, setCurrentPage, currentPage}: IPagination) => {
  const ONE = 1

  let buttons = Array.from(Array(countItems).keys()).map(i =>
    <S.PageButtons
      isActive={currentPage === i + ONE}
      onClick={() => setCurrentPage(i + ONE)} key={i}>
      {i + ONE}
    </S.PageButtons>)

  return (
    <S.PaginationContainer>
      {buttons}
    </S.PaginationContainer>
  )
}
export default Pagination
