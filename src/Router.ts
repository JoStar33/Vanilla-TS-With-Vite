import MainPage from '@/pages';
import TestPage from '@/pages/TestPage';
import '@/styles/testPage.css';
import ConditionalRenderPage from './pages/ConditionalRenderPage';

export const routes = {
  '/': MainPage(),
  '/test': TestPage(),
  '/conditional': ConditionalRenderPage(),
};

const appDiv = document.querySelector('#app')!;
const renderHTML = (pathName: keyof typeof routes) => {
  appDiv.replaceChildren(routes[pathName]);
};

export const onNavigate = (pathName: keyof typeof routes) => {
  window.history.pushState({}, '', window.location.origin + pathName);
  renderHTML(pathName);
};

window.onpopstate = () => {
  const pathName = window.location.pathname;
  if (routes.hasOwnProperty(pathName)) {
    appDiv.replaceChildren(routes[pathName as keyof typeof routes]);
    return;
  }
};
