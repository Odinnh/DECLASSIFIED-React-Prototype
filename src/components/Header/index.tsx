import React, {useContext} from 'react';
import { IntelContext, IntelContextProvider } from '../../contexts/IntelContext/IntelContextProvider';
import { MapDetails } from '../../contexts/IntelContext/types';
import { IHeaderProps } from './types';

const Header = ({ test }: IHeaderProps) => {
  const { currentMap, setCurrentMap } = useContext(IntelContext);

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
        <li>
          <h2 onClick={() => {setCurrentMap(MapDetails.dieMaschine.id)}}>Die Maschine</h2>
          <ul>
            <li onClick="changeMapTo('dieMaschine',this)">Surface</li>
            <li onClick="changeMapTo('dieMaschine_underground',this)">Underground</li>
          </ul>
        </li>
        <li>
          <h2 onClick="expandMenu(this)">Firebase Z</h2>
          <ul>
            <li onClick="changeMapTo('firebaseZ_spawn',this)">Spawn</li>
            <li onClick="changeMapTo('firebaseZ',this)">Main Base</li>
          </ul>
        </li>
        <li>
          <h2 onClick="expandMenu(this)">Mauer Der Toten</h2>
          <ul>
            <li onClick="changeMapTo('mauerDerToten_streets',this)">Surface</li>
            <li onClick="changeMapTo('mauerDerToten',this)">Underground</li>
          </ul>
        </li>
        <li>
          <h2 onClick="expandMenu(this)">Forsaken</h2>
          <ul>
            <li onClick="changeMapTo('forsaken',this)">Surface</li>
            <li onClick="changeMapTo('forsaken_underground',this)">Underground</li>
          </ul>
        </li>
        <li>
          <h2 onClick="expandMenu(this)">Outbreak</h2>
          <ul>
            <li onClick="changeMapTo('zoo',this)">Zoo</li>
            <li onClick="changeMapTo('duga',this)">Duga</li>
            <li onClick="changeMapTo('ruka',this)">Ruka</li>
            <li onClick="changeMapTo('alpine',this)">Alpine</li>
            <li onClick="changeMapTo('armada',this)">Armada</li>
            <li onClick="changeMapTo('golova',this)">Golova</li>
            <li onClick="changeMapTo('collateral',this)">Collateral</li>
            <li onClick="changeMapTo('sanatorium',this)">Sanatorium</li>
          </ul>
        </li>
        <li>
          <h2 onClick="expandMenu(this)">Contribute</h2>
          <ul>
            <li id="newIntel" class="dropdown-item not-selectable" onClick="newIntelInit()">Submit New Intel</li>
            <li id="newMisc" class="dropdown-item not-selectable" onClick="newMiscInit()">Submit New Misc Marker</li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;