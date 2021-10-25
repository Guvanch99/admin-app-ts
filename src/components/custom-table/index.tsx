import {FC, useRef} from "react";

import {CustomButton, TableBody, TableHeader, Pagination} from "../index"

import {TData} from "../../model/type";

import {LIMIT_ITEMS} from "../../constants/variables.constants";

import * as S from "./styled"

type TCustomTable = TData & {
    currentPage?: number
    setCurrentPage?: (value: number) => void
}

const CustomTable: FC<TCustomTable> = ({data, setCurrentPage, currentPage}) => {
    //@ts-ignore
    let countItems: number =  Math.ceil(data.countData / LIMIT_ITEMS)

    const refTable = useRef<HTMLTableElement>(null);

    const createExcel = () => {
        let csv = [];
        let rows: NodeListOf<HTMLTableRowElement>

        if (refTable && refTable.current) {
            rows = refTable.current.querySelectorAll("tr");
            for (let i = 0; i < rows.length; i++) {
                let row = [], cols: NodeListOf<HTMLTableRowElement> = rows[i].querySelectorAll("td, th");

                for (let j = 0; j < 2; j++) {
                    row.push(cols[j].innerText);
                }

                csv.push(row.join(","));
            }
        }


        let csv_string = csv.join("\n");
        let csv_blob = new Blob([csv_string], {type: "text/csv"});
        let csv_href = window.URL.createObjectURL(csv_blob);

        let link = document.createElement('a');
        link.href = csv_href;
        link.download = `${data.url.substring(1)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <S.CustomTableContainer>
            <CustomButton onclick={createExcel}>Download Excel</CustomButton>
            <S.Table ref={refTable}>
                <TableHeader/>
                <TableBody bodyData={data}/>
            </S.Table>

            {
                countItems === 1 || isNaN(countItems) ? null :
                    (setCurrentPage && currentPage) &&
                    <Pagination countItems={countItems} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
        </S.CustomTableContainer>
    )
}

export default CustomTable

