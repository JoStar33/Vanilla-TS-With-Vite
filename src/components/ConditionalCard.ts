import '@/styles/conditionalCard.css';

export default function ConditionalCard(id: string) {
  const conditionalCardBody = document.createElement('div');
  conditionalCardBody.className = 'conditional-card';
  conditionalCardBody.append('보인다!');
  conditionalCardBody.id = id;

  return conditionalCardBody;
}
