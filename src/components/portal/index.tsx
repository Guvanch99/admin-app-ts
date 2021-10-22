import React, {FC, useEffect, useMemo, Component} from 'react'
import {createPortal} from 'react-dom'

//TODO think of Component Portal
interface IPortal {
    nameOfClass: string
}

const Portal: FC<IPortal> = ({children, nameOfClass}) => {
    const el = useMemo(() => document.createElement('div'), [])
    el.setAttribute('class', nameOfClass)
    useEffect(() => {
        document.body.appendChild(el)
        return () => {
            document.body.removeChild(el)
        }
    }, [el])

    return createPortal(children, el)
}

export default Portal