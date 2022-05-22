import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';

export const HeaderItem = ({ title, mapList }) => {
    const { setCurrentMap } = useContext(IntelContext);
    const [isVisible, setisVisible] = useState(false);
    const headerClasses = classNames({
        visible: isVisible,
    })

    const toggleVisibility = () => {
        setisVisible((prevIsVisible) => !prevIsVisible);
    }

    return (
        <li>
            <h2 className={headerClasses} onClick={toggleVisibility}>{title}</h2>
            <ul>
                {mapList.map(map => (
                    <li onClick={() => setCurrentMap(map.id)}>{map.title}</li>
                ))}
            </ul>
        </li>
    )
}
