import {memo} from "react";

import {DATA} from "../../data"

import * as S from "./styled"

const {tableHeaderRow} = DATA

const TableHeader = () => {


    return <thead>
    <S.TReaderRow>
        {tableHeaderRow.map((name, idx) => <S.THeadRowHeader key={idx}>{name}</S.THeadRowHeader>)}
    </S.TReaderRow>
    </thead>
}

export default memo(TableHeader)