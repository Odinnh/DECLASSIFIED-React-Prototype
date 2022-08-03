import classNames from 'classnames';
import { useContext, useState } from 'react';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { HeaderItem } from '../HeaderItem';
import { MapGroupings } from '../MapControls/types';


const Header = () => {
  const { currentMapGroup } = useContext(DeclassifiedContext);
  const [isVisible, setIsVisible] = useState(false);

  const headerClasses = classNames({
    visible: isVisible,
  })
  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  }

  return (
    <header className={headerClasses}>
      <h1 onClick={toggleVisibility}>{currentMapGroup.mapName}<i className="fas fa-angle-down"></i></h1>
      <ul>
        {MapGroupings.map(mapMenuItem => (
          <HeaderItem
            key={`header-${mapMenuItem.mapLayers[0].id}`/* TODO: SWAP WITH USER PREFS */}
            map={mapMenuItem.mapLayers[0]/* TODO: SWAP WITH USER PREFS */}
            title={mapMenuItem.mapName}
          />
        ))}
      </ul>
    </header>
  );
};

export default Header;