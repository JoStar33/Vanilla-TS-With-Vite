import './style.css';
import MainPage from './pages/index.ts';
import { routes } from './Router.ts';

const appDiv = document.querySelector('#app')!;
appDiv.append(MainPage());
// 돔렌더전에 실행
(function () {
  const pathName = window.location.pathname;
  if (routes.hasOwnProperty(pathName)) {
    appDiv.replaceChildren(routes[pathName as keyof typeof routes]);
    return;
  }
})();
