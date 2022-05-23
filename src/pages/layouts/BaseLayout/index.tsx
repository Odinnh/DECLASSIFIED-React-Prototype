import '../../../styles/worldmap.css';
import '../../../styles/global.css';
import '../../../styles/leaflet-override.css';
import '../../../styles/style.css';
import '../../../styles/buttons.css';
import '../../../styles/normalize.css';
import '../../../styles/challenge/cards-alt.css';
import '../../../styles/challenge/cards.css';
import '../../../styles/challenge/mobilefirst.css';

export interface BaseLayoutProps {
    children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
            {/* <header>Test Header</header> */}
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
                integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
                crossOrigin="" />
            {children}
        </>
    );
}