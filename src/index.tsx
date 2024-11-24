import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';

const root = document.getElementById('root')!;

if (import.meta.env.VITE_REACT_STRICT_MODE.toLowerCase() === 'true') {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
} else {
	createRoot(root).render(<App />);
}
