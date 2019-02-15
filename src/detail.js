import './styles/detail.scss';
import api from './js/api';
// import './js/quoteForm';
import defaultImage from './images/default.jpg';
import moment from 'moment'
import striptags from 'striptags'

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');

const { getShowsDetail,  addLike,  addComment } = api();

const detailTemplate = ({ beerId, name, description, image, price, ingredients, firstBrewed, brewersTips, likes }) => `
  <header id="${beerId}">
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
      <img src="${image ? image : defaultImage}" />
    </div>
    <div class="likes-container">
      <p>Likes: <span id="likes-count">${likes}</span> <i class="fas fa-thumbs-up"></i></p>
      <p><button id="like" class="button primary">I Like It!</button></p>
    </div>
  </header>
  <div class="content">
    <p><a href="./index.html?search=${sessionStorage.getItem('beerName')}&year=${sessionStorage.getItem('beerYear')}"><button class="button primary">Back</button></a></p>
    <p>Price: $${price}</p>
    <p>First brewed: ${firstBrewed}</p>
    <h2>Description</h2>
      <p>${striptags(description)}</p>
    <h2>Ingredients</h2>
      <p>Yeast: ${striptags(ingredients.yeast)}</p>
      <h3>Malt</h3>
        <p><ul>${ingredients.malt.map(malt => `<li>${malt.name}: ${malt.amount.value} ${malt.amount.unit}</li>`).join('')}</ul></p>
      <h3>Hops</h3>
        <p><ul>${ingredients.hops.map(hops => `<li>${hops.name}: ${hops.amount.value} ${hops.amount.unit}, ${hops.add}, ${hops.attribute}</li>`).join('')}</ul></p>
    <h2>Brewer's Tips</h2>
      <p>${striptags(brewersTips)}</p>
      <p><a href="./index.html?search=${sessionStorage.getItem('beerName')}&year=${sessionStorage.getItem('beerYear')}"><button class="button primary">Back</button></a></p>
      `;

const [, id] = window.location.search ? window.location.search.split('=') : [];

const renderDetail = async () => {
  try {
    const show = await getShowsDetail(id);
    const showHTML = detailTemplate(show);
    const commentsHTML = commentsTemplate(show);
    document.getElementById('detail').innerHTML = showHTML;
    document.getElementById('quoteList').innerHTML = commentsHTML;
    const likeBtn = document.querySelector('#like');
    const likesCount = document.querySelector('#likes-count');
    likeBtn.addEventListener('click', async () => {
      const likes = await addLike(id);
      likesCount.innerHTML = likes;
    })

  } catch (e) {
    console.error(e);
  }
};

const commentsTemplate = ({comment}) => `
  ${comment ? comment.map(comment => `
  <div class="comment date"><p>On ${moment(comment.dateComment).format('LLL')}:</p></div>
  <div class="comment text"><p>${striptags(comment.comment)}</p></div>`).join('') : []}`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  console.log('SUBMIT!')
  try {
    const beer = await addComment(id, quoteInput.value);
    document.getElementById('quoteList').innerHTML = commentsTemplate(beer);
  } catch (e) {
    console.error(e);
  }

});

renderDetail();

// const renderComments = async () => {
//   try {
//     const [, id] = window.location.search ? window.location.search.split('=') : [];
//     const show = await getShowsDetail(id);
//     const commentsHTML = commentsTemplate(show);
//     document.getElementById('quoteList').innerHTML = commentsHTML;

//   } catch (e) {
//     console.error(e);
//   }
// };

// renderComments();

// const text = document.querySelector('.inputComment');
// commentBtn.addEventListener('submit', async (e) => {
// e.preventDefault();
// const comments = await addComment(id, text)
// })