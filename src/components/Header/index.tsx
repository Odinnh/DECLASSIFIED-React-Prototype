import React, { useContext } from 'react';
import { IntelContext, IntelContextProvider } from '../../contexts/IntelContext/IntelContextProvider';
import { MapDetails } from '../../contexts/IntelContext/types';
import { HeaderItem } from '../HeaderItem';
import { IHeaderProps } from './types';

const MapList = [
  {
    title: MapDetails.dieMaschine.title,
    mapList: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground]
  },
  {
    title: MapDetails.firebaseZ.title,
    mapList: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn]
  }

]

const Header = () => {
  const { currentMap } = useContext(IntelContext);

  /*   function changeMapTo(mapId) {
      setMap(mapId);
      setVisibilityFromPrefs();
      collapseMenu();
      TriggerSearch();
  }
   */
  return (
    <header>
      <h1>{currentMap}<i className="fas fa-angle-down"></i></h1>
      <ul>
        {MapList.map(mapHeader => (
          <HeaderItem {...mapHeader} />
          ))}
      </ul>
    </header>
  );
};

export default Header;