import api from './api';

const { getShowsDetail, addComment } = api();

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');

const commentsTemplate = ({comment}) => `
  <div class="list-item">
    <p>${comment ? comment.map(comment => `<p>${comment.dateComment.substring(0,10)}</p><p>${comment.comment}</p>`).join('') : []}</p>
  </div>
`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  try {
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const comments = await addcomment(id, quoteInput.value);
    // const beer = await getBeer(id);
    document.getElementById('quoteList').innerHTML = quoteTemplate(quoteInput.value);
  } catch (e) {
    console.error(e);
  }

});

const renderComments = async () => {
  try {
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const show = await getShowsDetail(id);
    const commentsHTML = commentsTemplate(show);
    document.getElementById('quoteList').innerHTML = commentsHTML;
    
  } catch (e) {
    console.error(e);
  }
};

renderComments();

// const text = document.querySelector('.inputComment');
// commentBtn.addEventListener('submit', async (e) => {
// e.preventDefault();
// const comments = await addComment(id, text)
// })