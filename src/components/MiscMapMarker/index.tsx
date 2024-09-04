import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MiscMarker } from '../../classes'
import { Paper, Typography } from '@mui/material'
import { MiscIconTypes } from '../../data/misc'
import { getMiscMarkerById } from '../../helpers/github'
import { BugReportButton } from '../ActionButtons/BugReportButton'
import { ShareButton } from '../ActionButtons/ShareButton'
import { DefaultPOIData } from '../../data/intel'
import { GetMapById } from '../../data/mapDetails'
import styled from '@emotion/styled'

export const MiscMapMarker = ({
  id,
  title,
  desc,
  icon,
  typeDesc,
  loc,
}: MiscMarker) => {
  const renderedIcon = miscIconInit(icon);
  let miscItemResult = getMiscMarkerById(id!);
  let miscItemMap;
  if (miscItemResult) {
    const [miscMapId, miscItem] = miscItemResult;
    const MiscHasLocation = miscItem.loc !== DefaultPOIData.nullLoc
    if (MiscHasLocation) {
      miscItemMap = GetMapById(miscMapId)!;
    }
  }

  return (
    <Marker position={loc} icon={renderedIcon}>
      <StyledPopup>
        <MiscDetailItem>
          <PopupTitle variant="h2">{title}</PopupTitle>
          <MiscDescription>{desc}</MiscDescription>
          <ActionContainer>
            <ShareButton id={id} />
            <BugReportButton id={id} typeDesc={typeDesc} mapItem={miscItemMap} />
          </ActionContainer>
        </MiscDetailItem>
      </StyledPopup>
    </Marker>
  )
}

export const miscIconInit = (id?: string) => {
  const { iconSize, iconAnchor, popupAnchor } =
    (id && customMiscIconBounds[id]) ?? {}
  return L.icon({
    iconUrl: `assets/img/markers/${(id ?? '').toLowerCase()}.${svgIcons[id ?? ''] ? 'svg' : 'png'
      }`,
    iconSize: iconSize ?? [30, 30],
    iconAnchor: iconAnchor ?? [15, 15],
    popupAnchor: popupAnchor ?? [0, -15],
    className: 'misc-icon',
  })
}

const svgIcons = {
  [MiscIconTypes.rampageInducer]: true,
  [MiscIconTypes.portal]: true,
  [MiscIconTypes.zipline]: true,
  [MiscIconTypes.ziplineUp]: true,
  [MiscIconTypes.ziplineDown]: true,
  [MiscIconTypes.redRift]: true,
  [MiscIconTypes.rift]: true,
  [MiscIconTypes.tunnel]: true,
  [MiscIconTypes.upgrade]: true,
  [MiscIconTypes.trap]: true,
  [MiscIconTypes.projector]: true,
  [MiscIconTypes.jumpPad]: true,
  [MiscIconTypes.landingPad]: true,
  [MiscIconTypes.demented]: true,
  [MiscIconTypes.orb]: true,
  [MiscIconTypes.reactor]: true,
  [MiscIconTypes.power]: true,
  [MiscIconTypes.ammoCrate]: true,
  [MiscIconTypes.wallbuy]: true,
  [MiscIconTypes.trialComputer]: true,
  [MiscIconTypes.papMachine]: true,
  [MiscIconTypes.arsenal]: true,
  [MiscIconTypes.craftingTable]: true,
  [MiscIconTypes.workbench]: true,
  [MiscIconTypes.objective]: true,
  [MiscIconTypes.door]: true,
  [MiscIconTypes.doorPower]: true,
  [MiscIconTypes.armorWall]: true,
  [MiscIconTypes.trialChallenge]: true,
  [MiscIconTypes.gumball]: true,
  [MiscIconTypes.meleeMacchiato]: true,
}
const svgIconProperties = { popupAnchor: [5, -20], iconSize: [40, 40] }
const customMiscIconBounds = {
  [MiscIconTypes.general]: {
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  },
  [MiscIconTypes.radio]: {
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30],
  },
  [MiscIconTypes.rift]: {
    iconSize: [40, 40],
    popupAnchor: [5, -20],
  },
  [MiscIconTypes.fishing]: {
    popupAnchor: [0, -30],
  },
  [MiscIconTypes.monkey]: {
    popupAnchor: [0, -30],
  },
  [MiscIconTypes.redRift]: {
    iconSize: [40, 40],
    popupAnchor: [5, -20],
  },

  [MiscIconTypes.demented]: svgIconProperties,
  [MiscIconTypes.rampageInducer]: svgIconProperties,
  [MiscIconTypes.portal]: svgIconProperties,
  [MiscIconTypes.zipline]: svgIconProperties,
  [MiscIconTypes.ziplineUp]: svgIconProperties,
  [MiscIconTypes.ziplineDown]: svgIconProperties,
  [MiscIconTypes.tunnel]: svgIconProperties,
  [MiscIconTypes.upgrade]: svgIconProperties,
  [MiscIconTypes.trap]: svgIconProperties,
  [MiscIconTypes.projector]: svgIconProperties,
  [MiscIconTypes.jumpPad]: svgIconProperties,
  [MiscIconTypes.landingPad]: svgIconProperties,
  [MiscIconTypes.orb]: svgIconProperties,
  [MiscIconTypes.power]: svgIconProperties,
  [MiscIconTypes.ammoCrate]: svgIconProperties,
  [MiscIconTypes.wallbuy]: svgIconProperties,
  [MiscIconTypes.trialComputer]: svgIconProperties,
  [MiscIconTypes.papMachine]: svgIconProperties,
  [MiscIconTypes.arsenal]: svgIconProperties,
  [MiscIconTypes.craftingTable]: svgIconProperties,
  [MiscIconTypes.workbench]: svgIconProperties,
  [MiscIconTypes.objective]: svgIconProperties,
  [MiscIconTypes.door]: svgIconProperties,
  [MiscIconTypes.doorPower]: svgIconProperties,
  [MiscIconTypes.armorWall]: svgIconProperties,
  [MiscIconTypes.trialChallenge]: svgIconProperties,
  [MiscIconTypes.gumball]: svgIconProperties,
  [MiscIconTypes.meleeMacchiato]: svgIconProperties,
}

const StyledPopup = styled(Popup)`
  background-color: var(--clr-bg-inverted);
  border-radius: 12px !important;
  box-shadow: unset !important;
  margin: 0 !important;
  .leaflet-popup-content-wrapper {
    .leaflet-popup-content {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
  .leaflet-popup-close-button {
    display: none !important;
  }
`

const MiscDetailItem = styled(Paper)`
  background-color: unset;
  border-radius: unset;
  padding: 8px;
  /* width:300px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const PopupTitle = styled(Typography)`
  font-size: 1.1rem;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`

const MiscDescription = styled(Typography)`
  text-align: center;
  margin: 0px !important;
  font-size: 0.7rem;
`

const ActionContainer = styled.div`
  svg {
    font-size: 1.2rem;
  }
  display: flex;
  justify-content: space-evenly;
`