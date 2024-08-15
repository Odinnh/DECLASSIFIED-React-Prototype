import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { HeaderItemProps } from './types';

export const HeaderItem = ({ map, title }: HeaderItemProps) => {
    const { setCurrentMapWithValidation: setCurrentMap } = useContext(DeclassifiedContext);
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
