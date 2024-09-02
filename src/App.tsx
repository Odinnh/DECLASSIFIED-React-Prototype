import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import MapProvider from './components/Map';
import { UserContext, UserContextProvider } from './contexts/DeclassifiedContext/userContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';
import { useContext, useEffect } from 'react';

const MapWithItemId = () => {
  const { id } = useParams();
  const { updateMapItemId } = useContext(UserContext);

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
            {/* Define route with id for focusing on a specific item */}
            <Route path="/:id" Component={MapWithItemId} />
            
            {/* Define default route */}
            <Route path="/" Component={MapProvider} />
          </Routes>
        </UserContextProvider>
      </BaseLayout>
    </Router>
  );
}

export default App;
