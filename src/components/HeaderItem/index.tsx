import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { HeaderItemProps } from './types';

export const HeaderItem = ({ map, title }: HeaderItemProps) => {
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
            <h2 onClick={() => setCurrentMap(map)}>{title}</h2>
            {/* <ul>
                {mapList.map(map => (
                    <li key={map.id} onClick={() => setCurrentMap(map.id)}>{map.title}</li>
                ))}
            </ul> */}
        </li>
    )
}
