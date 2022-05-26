import classNames from 'classnames';
import { useContext, useState } from 'react';
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { HeaderItem } from '../HeaderItem';
import { MapGroupings } from '../MapControls/types';


const Header = () => {
  const { currentMap } = useContext(IntelContext);
  const [isVisible, setIsVisible] = useState(false);
  /*   function changeMapTo(mapId) {
      setMap(mapId);
      setVisibilityFromPrefs();
      collapseMenu();
      TriggerSearch();
  }
   */

  const headerClasses = classNames({
    visible: isVisible,
  })
  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  }

  return (
    <header className={headerClasses}>
      <h1 onClick={toggleVisibility}>{currentMap.desc}<i className="fas fa-angle-down"></i></h1>
      <ul>
        {MapGroupings.map(mapMenuItem => (
          <HeaderItem key={mapMenuItem.MapLayers[0].id} id={mapMenuItem.MapLayers[0].id} title={mapMenuItem.MapName} />
        ))}
      </ul>
    </header>
  );
};

export default Header;