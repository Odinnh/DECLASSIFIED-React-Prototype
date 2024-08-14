import MapProvider from './components/Map';
import { UserContextProvider } from './contexts/DeclassifiedContext/userContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';

function App() {
  document.body.classList.add('dark'); // TODO: remove this when re-working themes

  return (
    <BaseLayout>
      <UserContextProvider>
        <MapProvider />
      </UserContextProvider>
    </BaseLayout>
  );
}

export default App;
