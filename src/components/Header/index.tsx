import classNames from 'classnames';
import { useContext, useState } from 'react';
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { MapDetails } from '../../contexts/IntelContext/types';
import { HeaderItem } from '../HeaderItem';

const MapList = [
  {
    map: MapDetails.dieMaschine,
  },
  {
    map: MapDetails.firebaseZ,
  }

]

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
      <h1 onClick={toggleVisibility}>{currentMap}<i className="fas fa-angle-down"></i></h1>
      <ul>
        {MapList.map(mapHeader => (
          <HeaderItem key={mapHeader.map.id} {...mapHeader.map} />
        ))}
      </ul>
    </header>
  );
};

export default Header;