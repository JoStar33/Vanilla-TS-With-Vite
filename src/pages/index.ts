import { onNavigate } from '../Router';
import '@/styles/main.css';

export default function MainPage() {
  const pageBody = document.createElement('div');
  pageBody.className = 'main-page';
  pageBody.append('This is Main Page');

  const routeButton = document.createElement('button');
  routeButton.append('Route Button');
  const handleClickRouteButton = () => {
    console.log('is click');
    onNavigate('/test');
  };
  routeButton.addEventListener('click', handleClickRouteButton);

  pageBody.append(routeButton);
  return pageBody;
}
