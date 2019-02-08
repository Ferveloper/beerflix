import api from './api';

const QUOTES_API = 
  'https://quotes-api-ecoitpillp.now.sh/api/v1/quote/';

const { createQuote } = api(QUOTES_API);

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');

const quoteTemplate = (quote) => `
  <div class="list-item">
    <p>${quote}</p>
  </div>
`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  try {
    const [, id] = window.location.search ?
      window.location.search.split('=') : [];
    const quote = await createQuote(id, quoteInput.value);
    // const beer = await getBeer(id);
    document.getElementById('quoteList').innerHTML = quoteTemplate(quoteInput.value);
  } catch (e) {
    console.error(e);
  }

});
