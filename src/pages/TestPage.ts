import { onNavigate, routes } from '@/Router';

interface SideBarElement {
  title: string;
  path: keyof typeof routes;
}

const sideBarMenu: SideBarElement[] = [
  { title: '메인페이지', path: '/' },
  { title: '메인페이지2', path: '/' },
];

export default function TestPage() {
  const testBody = document.createElement('div');
  const testSideBar = document.createElement('div');
  testSideBar.className = 'test-page__side-bar';

  const handleClickSideButton = (path: keyof typeof routes) => {
    onNavigate(path);
  };

  sideBarMenu.forEach((element) => {
    const testSideBarElement = document.createElement('button');
    testSideBarElement.className = 'test-page__side-bar__element';
    testSideBarElement.append(element.title);
    testSideBarElement.addEventListener('click', () => handleClickSideButton(element.path));
    testSideBar.append(testSideBarElement);
  });

  const testMain = document.createElement('div');
  testMain.className = 'test-page__main';

  testBody.append(testSideBar);
  testBody.append(testMain);
  return testBody;
}
