import styled from "@emotion/styled";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useMapEvents } from "react-leaflet";
import { DeclassifiedContext } from "../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { DefaultPOIData } from "../../data/intel";
import { GetMapById } from "../../data/mapDetails";
import { getMiscMarkerById } from "../../helpers/github";
import { BugReportButton } from "../ActionButtons/BugReportButton";
import { ShareButton } from "../ActionButtons/ShareButton";

export const MiscDetailItem = ({
    id,
    title,
    desc,
    typeDesc,
    loc }) => {
    const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
    const mapInstance = useMapEvents({});

    let miscItemResult = getMiscMarkerById(id!);
    let miscItemMap, miscMapId, miscItem;
    if (miscItemResult) {
        [miscMapId, miscItem] = miscItemResult;
        const MiscHasLocation = miscItem.loc !== DefaultPOIData.nullLoc;
        if (MiscHasLocation) {
            miscItemMap = GetMapById(miscMapId)!;
        }
    }
    const ItemHasLocation = loc !== DefaultPOIData.nullLoc;
    const ItemIsOnAnotherMap = miscMapId !== currentMap!.id;

    return (
        <MiscDetailItemContainer>
            <PopupTitle variant="h2">{title}</PopupTitle>
            <MiscDescription>{desc}</MiscDescription>
            <ActionContainer>
                {ItemHasLocation && miscItemMap?.mapCanRender ? <Button onClick={async () => {
                    if (ItemIsOnAnotherMap) {
                        if (miscItemMap && miscItemMap.mapCanRender) {
                            var mapSetResult = await setCurrentMap(miscItemMap);

                            if (mapSetResult) {
                                mapInstance.flyTo(loc, 4);
                            }
                        }
                    } else {
                        mapInstance.flyTo(loc, 4);
                    }
                }}>
                    <LocationOnIcon htmlColor="var(--clr-blue)" />
                </Button> : <Button disabled>
                    <LocationOnIcon htmlColor="var(--clr-blue)" />
                </Button>}
                <ShareButton id={id} />
                <BugReportButton id={id} typeDesc={typeDesc} mapItem={miscItemMap} />
            </ActionContainer>
        </MiscDetailItemContainer>
    );
}

const MiscDetailItemContainer = styled(Paper)`
	background-color: unset;
	border-radius: unset;
	padding: 8px;
	/* width:300px; */
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const PopupTitle = styled(Typography)`
	font-size: 1.1rem;
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
`;

const MiscDescription = styled(Typography)`
	text-align: center;
	margin: 0px !important;
	font-size: 0.7rem;
	white-space: pre-wrap;
	width: 10rem;
`;

const ActionContainer = styled.div`
	svg {
		font-size: 1.2rem;
	}
	display: flex;
	justify-content: space-evenly;
`;