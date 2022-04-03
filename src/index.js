import ReactDOMClient from 'react-dom/client';
import App from './App';

const gameContainer = document.getElementById('game');
const root = ReactDOMClient.createRoot(gameContainer);

root.render(<App/>);