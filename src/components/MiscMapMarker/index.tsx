import styled from '@emotion/styled';
import L from 'leaflet';
import { useContext, useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { MiscMarker } from '../../classes';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { IconFileNames } from '../../data/icons';
import { MiscDetailItem } from '../MiscDetailsItem';

export const MiscMapMarker = ({
	id,
	title,
	desc,
	icon,
	typeDesc,
	loc,
}: MiscMarker) => {
	const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
	const mapInstance = useMapEvents({});
	const renderedIcon = miscIconInit(icon);
	const [markerInstance, setPopupInstance] = useState<L.Marker | null>(null); // State to hold the Popup instance
	const { sharedMapItemId } = useUserContext();

	useEffect(() => {
		if (sharedMapItemId === id && markerInstance) {
			markerInstance.openPopup();
		}
	}, [sharedMapItemId, id, markerInstance, mapInstance]);

	return (
		<Marker position={loc} icon={renderedIcon} ref={setPopupInstance}>
			<StyledPopup>
				<MiscDetailItem
					id={id}
					title={title}
					desc={desc}
					typeDesc={typeDesc}
					loc={loc} />
			</StyledPopup>
		</Marker>
	);
};

export const miscIconInit = (id?: string) => {
	const { iconSize, iconAnchor, popupAnchor } =
		(id && customMiscIconBounds[id]) ?? {};
	return L.icon({
		iconUrl: `assets/img/markers/${(id ?? '').toLowerCase()}.${svgIcons[id ?? ''] ? 'svg' : 'png'}`,
		iconSize: iconSize ?? [30, 30],
		iconAnchor: iconAnchor ?? [15, 15],
		popupAnchor: popupAnchor ?? [0, -15],
		className: 'misc-icon',
	});
};

const svgIcons = {
	[IconFileNames.rampageInducer]: true,
	[IconFileNames.portal]: true,
	[IconFileNames.zipline]: true,
	[IconFileNames.ziplineUp]: true,
	[IconFileNames.ziplineDown]: true,
	[IconFileNames.redRift]: true,
	[IconFileNames.rift]: true,
	[IconFileNames.tunnel]: true,
	[IconFileNames.upgrade]: true,
	[IconFileNames.trap]: true,
	[IconFileNames.projector]: true,
	[IconFileNames.jumpPad]: true,
	[IconFileNames.landingPad]: true,
	[IconFileNames.demented]: true,
	[IconFileNames.orb]: true,
	[IconFileNames.reactor]: true,
	[IconFileNames.power]: true,
	[IconFileNames.ammoCrate]: true,
	[IconFileNames.wallbuy]: true,
	[IconFileNames.trialComputer]: true,
	[IconFileNames.papMachine]: true,
	[IconFileNames.arsenal]: true,
	[IconFileNames.craftingTable]: true,
	[IconFileNames.workbench]: true,
	[IconFileNames.objective]: true,
	[IconFileNames.door]: true,
	[IconFileNames.doorPower]: true,
	[IconFileNames.armourWall]: true,
	[IconFileNames.trialChallenge]: true,
	[IconFileNames.gobblegum]: true,
	[IconFileNames.meleeMacchiato]: true,
	[IconFileNames.cassette]: true,
	[IconFileNames.interactable]: true,
	[IconFileNames.mainQuest]: true,
	[IconFileNames.secretArea]: true,
	[IconFileNames.clue]: true,
};
const svgIconProperties = { popupAnchor: [5, -20], iconSize: [40, 40] };
const customMiscIconBounds = {
	[IconFileNames.general]: {
		iconAnchor: [15, 30],
		popupAnchor: [0, -30],
	},
	[IconFileNames.radio]: {
		iconSize: [39, 48],
		iconAnchor: [19.5, 24],
		popupAnchor: [0, -30],
	},
	[IconFileNames.rift]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},
	[IconFileNames.fishing]: {
		popupAnchor: [0, -30],
	},
	[IconFileNames.monkey]: {
		popupAnchor: [0, -30],
	},
	[IconFileNames.redRift]: {
		iconSize: [40, 40],
		popupAnchor: [5, -20],
	},

	[IconFileNames.demented]: svgIconProperties,
	[IconFileNames.rampageInducer]: svgIconProperties,
	[IconFileNames.portal]: svgIconProperties,
	[IconFileNames.zipline]: svgIconProperties,
	[IconFileNames.ziplineUp]: svgIconProperties,
	[IconFileNames.ziplineDown]: svgIconProperties,
	[IconFileNames.tunnel]: svgIconProperties,
	[IconFileNames.upgrade]: svgIconProperties,
	[IconFileNames.trap]: svgIconProperties,
	[IconFileNames.projector]: svgIconProperties,
	[IconFileNames.jumpPad]: svgIconProperties,
	[IconFileNames.landingPad]: svgIconProperties,
	[IconFileNames.orb]: svgIconProperties,
	[IconFileNames.power]: svgIconProperties,
	[IconFileNames.ammoCrate]: svgIconProperties,
	[IconFileNames.wallbuy]: svgIconProperties,
	[IconFileNames.trialComputer]: svgIconProperties,
	[IconFileNames.papMachine]: svgIconProperties,
	[IconFileNames.arsenal]: svgIconProperties,
	[IconFileNames.craftingTable]: svgIconProperties,
	[IconFileNames.workbench]: svgIconProperties,
	[IconFileNames.objective]: svgIconProperties,
	[IconFileNames.door]: svgIconProperties,
	[IconFileNames.doorPower]: svgIconProperties,
	[IconFileNames.armourWall]: svgIconProperties,
	[IconFileNames.trialChallenge]: svgIconProperties,
	[IconFileNames.gobblegum]: svgIconProperties,
	[IconFileNames.meleeMacchiato]: svgIconProperties,
	[IconFileNames.cassette]: svgIconProperties,
	[IconFileNames.interactable]: svgIconProperties,
	[IconFileNames.mainQuest]: svgIconProperties,
	[IconFileNames.secretArea]: svgIconProperties,
	[IconFileNames.clue]: svgIconProperties,
};

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
`;
