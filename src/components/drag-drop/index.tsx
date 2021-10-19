import {useState, useRef} from "react";

import {biteToMb} from "../../utils";

import {DATA} from "../../data";

import {FILE_TYPE, FIVE_MB} from "../../constants/variables";

import * as S from './styled'

const {instructions} = DATA

const DragDrop = () => {
    const [isDrag, setIsDrag] = useState(true)
    const [success, setSuccess] = useState(false)
    const [file, setFile] = useState(null)
    const [error, setError] = useState({
        errorSample: false,
        condition: ''

    })
    const inputRef = useRef(null)

    const openDirectory = () => inputRef.current.click();

    const dragStartHandler = e => {
        e.preventDefault()
        e.stopPropagation()
        setIsDrag(false)
        setError({errorSample: false, condition: ''})
    }

    const dragLeaveHandler = e => {
        e.preventDefault()
        e.stopPropagation()
        setIsDrag(true)
    }

    const onDrop = e => {
        const {dataTransfer: {files}} = e
        e.preventDefault()
        e.stopPropagation()

        if (files.length > 1)
            setError({errorSample: true, condition: 'Must be one File'})
        else if (files[0].type !== FILE_TYPE)
            setError({errorSample: true, condition: 'Must be excel format'})
        else if (files[0].size < FIVE_MB)
            setError({errorSample: true, condition: 'Must be less than 5 MB'})
        else {
            setFile(files[0])
            setSuccess(true)
            setError({errorSample: false, condition: ''})
            setIsDrag(true)
        }
    }

    const selectFileHandler = ({target: {files}}) => {
        if (files[0].size < FIVE_MB) {
            setFile(files[0])
            setSuccess(true)
            setIsDrag(true)
            setError({errorSample: false, condition: ''})
        } else
            setError({errorSample: true, condition: 'Must be less than 5 MB'})
    }

    const closeSuccess = () => setSuccess(false)

    const {condition, errorSample} = error

    return (
        <S.Container>
            <S.ExcelUploaderText>Excel Uploader</S.ExcelUploaderText>
            <S.DropArea onDragStart={dragStartHandler}
                        onDragLeave={dragLeaveHandler}
                        onDragOver={dragStartHandler}
                        onDrop={onDrop}
                        isSolidLine={!isDrag}
                        error={errorSample}
                        success={success}>
                {success ? (
                    <S.DragContainer>
                        <S.Icon status={errorSample} big className='fas fa-check-circle'/>
                        <S.Button status={errorSample} onClick={closeSuccess}>Close</S.Button>
                    </S.DragContainer>
                ) : errorSample ? (
                    <S.DragContainer>
                        <S.Icon status={errorSample} big className='fas fa-redo'/>
                        <S.Button status={errorSample} onClick={openDirectory}>File Upload</S.Button>
                        <S.DragText status={errorSample}>{condition}</S.DragText>
                    </S.DragContainer>
                ) : (isDrag ? (
                            <S.DragContainer>
                                <S.IconSimple big className='fas fa-file-csv'/>
                                <S.Button onClick={openDirectory}>File Upload</S.Button>
                                <S.DragTextH2>Drag for Uploading file</S.DragTextH2>
                            </S.DragContainer>)
                        :
                        <S.DragTextH2>
                            Drag for Uploading file
                        </S.DragTextH2>
                )}
                <S.Input type='file'
                         multiple={false}
                         accept={FILE_TYPE}
                         ref={inputRef}
                         onChange={selectFileHandler}/>
            </S.DropArea>
            {
                file !== null ? (
                    <S.InstructionContainer>
                        <S.InstructionText>Name: {file.name}</S.InstructionText>
                        <S.InstructionText>Size: {biteToMb(file.size)} Mb</S.InstructionText>
                        <S.InstructionText>Format: excel</S.InstructionText>
                    </S.InstructionContainer>
                ) : (
                    <S.InstructionContainer>
                        <S.InstructionText>Instructions:</S.InstructionText>
                        <S.ListContainer>
                            {
                                instructions.map(({text}, idx) => (
                                    <div key={idx}>
                                        <S.List>{text}</S.List>
                                        {idx === 0 ? (
                                            <S.RulesContainer>
                                                <S.Icon className='fas fa-file-csv'/>
                                                <S.RulesText>Download example CSV</S.RulesText>
                                            </S.RulesContainer>
                                        ) : null}
                                    </div>
                                ))}
                        </S.ListContainer>
                    </S.InstructionContainer>
                )}
        </S.Container>
    )
}

export default DragDrop
