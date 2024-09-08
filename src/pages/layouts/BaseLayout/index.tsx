import '../../../styles/buttons.css';
import '../../../styles/challenge/cards-alt.css';
import '../../../styles/challenge/cards.css';
import '../../../styles/challenge/mobilefirst.css';
import '../../../styles/global.css';
import '../../../styles/leaflet-override.css';
import '../../../styles/normalize.css';
import '../../../styles/style.css';

export interface BaseLayoutProps {
	children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<>
			{/* <header>Test Header</header> */}

			{children}
		</>
	);
};
