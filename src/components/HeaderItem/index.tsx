import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';

export const HeaderItem = ({ id, title }: any) => {
    const { setCurrentMap } = useContext(IntelContext);
    const [isVisible, setIsVisible] = useState(false);
    const headerClasses = classNames({
        visible: isVisible,
    })

    /*     const toggleVisibility = () => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
        } */

    return (
        <li className={headerClasses}>
            <h2 onClick={() => setCurrentMap(id)}>{title}</h2>
            {/* <ul>
                {mapList.map(map => (
                    <li key={map.id} onClick={() => setCurrentMap(map.id)}>{map.title}</li>
                ))}
            </ul> */}
        </li>
    )
}
