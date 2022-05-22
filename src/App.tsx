import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { IntelContextProvider } from './contexts/IntelContext/IntelContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';
import { MapContainer } from 'react-leaflet';

function App() {
  
  return (
    <BaseLayout>
      <IntelContextProvider>
        <MapContainer >
          <Header />
        </MapContainer>
      </IntelContextProvider>
    </BaseLayout>
  );
}

export default App;
