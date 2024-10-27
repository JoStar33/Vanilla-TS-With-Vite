import './style.css';
import MainPage from './pages/index.ts';

document.querySelector<HTMLDivElement>('#app')!.append(MainPage());
