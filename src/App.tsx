import './App.css';
import MapProvider from './components/Map';
import { IntelContextProvider } from './contexts/IntelContext/IntelContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';

function App() {
  document.body.classList.add('dark');

  return (
    <BaseLayout>
      <MapProvider />
    </BaseLayout>
  );
}

export default App;
