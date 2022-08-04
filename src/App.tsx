import './App.css';
import MapProvider from './components/Map';
import { BaseLayout } from './pages/layouts/BaseLayout';

function App() {
  document.body.classList.add('dark'); // TODO: remove this when re-working themes

  return (
    <BaseLayout>
      <MapProvider />
    </BaseLayout>
  );
}

export default App;
