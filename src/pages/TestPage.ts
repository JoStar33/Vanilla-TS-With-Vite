import { TestCard } from '@/components/TestCard';
import { onNavigate, routes } from '@/Router';

interface SideBarElement {
  title: string;
  path: keyof typeof routes;
}

const sideBarMenu: SideBarElement[] = [
  { title: '메인페이지', path: '/' },
  { title: '메인페이지2', path: '/' },
];

const cardData = ['제목', '제목임', '테스트 제목'];

export default function TestPage() {
  const testBody = document.createElement('div');
  testBody.className = 'test-page';
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
  cardData.forEach((cardElement) => testMain.append(TestCard({ title: cardElement })));
  testBody.append(testSideBar);
  testBody.append(testMain);
  return testBody;
}
