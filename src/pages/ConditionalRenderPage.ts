import ConditionalCard from '@/components/ConditionalCard';
import '@/styles/conditionalRenderPage.css';

export default function ConditionalRenderPage() {
  const conditionalRenderBody = document.createElement('div');
  conditionalRenderBody.className = 'conditional-page';

  const conditionalCardKey = 'is-show';

  conditionalRenderBody.append(ConditionalCard(conditionalCardKey));

  const conditionalButton = document.createElement('button');
  conditionalButton.className = 'conditional-button';
  conditionalButton.append('카드를 보여다오');
  conditionalButton.addEventListener('click', () => {
    const conditionalCard = document.getElementById(conditionalCardKey);
    if (!conditionalCard) return;
    if (conditionalCard.style.display === 'none') {
      conditionalCard.style.display = 'flex';
      return;
    }
    conditionalCard.style.display = 'none';
  });
  conditionalRenderBody.append(conditionalButton);

  return conditionalRenderBody;
}
