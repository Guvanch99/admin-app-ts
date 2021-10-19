import {FC, useEffect, useMemo, Component} from 'react'
import {createPortal} from 'react-dom'

interface IPortal {
    component: typeof Component
    nameOfClass: string
}

const Portal: FC<IPortal> = ({component: ComponentPortal, nameOfClass, ...rest}) => {
    const el = useMemo(() => document.createElement('div'), [])
    el.setAttribute('class', nameOfClass)
    useEffect(() => {
        document.body.appendChild(el)
        return () => {
            document.body.removeChild(el)
        }
    }, [el])

    return createPortal(<ComponentPortal {...rest} />, el)
}

export default Portal