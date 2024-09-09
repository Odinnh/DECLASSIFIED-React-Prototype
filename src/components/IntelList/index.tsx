import { Paper, Typography } from '@mui/material';
import { useContext } from 'react';
import styled from 'styled-components';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { IntelDetailsItem } from '../IntelDetailsItem';

const StyledIntelList = styled.div`
	background-color: var(--clr-grey-d);
	padding: 10px;
`;

const NoResults = styled(Paper)`
	h2 {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
		padding: 10px;
	}
`;

export const IntelList = () => {
	const { currentMapGroup, filteredIntelStore } =
		useContext(DeclassifiedContext);
	// const [loading, setLoading] = useState(true); // TODO - Implement loading spinner

	if (!currentMapGroup) {
		return null;
	}

	const RenderedIntelList = filteredIntelStore.map(intel => {
		return <IntelDetailsItem key={intel.id} {...intel} />;
	});
	if (RenderedIntelList.length === 0) {
		return (
			<NoResults>
				<Typography variant="h2"> No Intel Found...</Typography>
			</NoResults>
		);
	}
	return (
		<>
			<StyledIntelList id="intel-list">{RenderedIntelList}</StyledIntelList>
		</>
	);
};