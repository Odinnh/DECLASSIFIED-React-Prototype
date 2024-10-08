import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from 'react-router-dom';
import MapProvider from './components/Map';
import {
	UserContextProvider,
	useUserContext,
} from './contexts/UserContext/userContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';
import { useEffect } from 'react';

const MapWithItemId = () => {
	const { id } = useParams();
	const { updateMapItemId } = useUserContext();

	// Update the global state with the 'id' parameter
	useEffect(() => {
		if (id) {
			updateMapItemId(id);
		}
	}, [id, updateMapItemId]);

	return <MapProvider />;
};

function App() {
	document.body.classList.add('dark'); // TODO: remove this when re-working themes

	return (
		<Router>
			<BaseLayout>
				<UserContextProvider>
					<Routes>
						<Route path="/:id" Component={MapWithItemId} />
						<Route path="/" Component={MapProvider} />
					</Routes>
				</UserContextProvider>
			</BaseLayout>
		</Router>
	);
}

export default App;
