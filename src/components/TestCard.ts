import '@/styles/testCard.css';

interface Props {
  title: string;
}

export function TestCard({ title }: Props) {
  const testCardBody = document.createElement('div');
  testCardBody.className = 'test-card';

  const testCardContent = document.createElement('div');
  testCardContent.className = 'test-card__content';

  const testCardTitle = document.createElement('p');
  testCardTitle.className = 'test-card__title';
  testCardTitle.append(title);
  testCardBody.append(testCardTitle);
  testCardBody.append(testCardContent);
  return testCardBody;
}
