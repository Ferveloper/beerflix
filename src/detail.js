import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm';
import defaultImage from './images/default.jpg';

const { getShowsDetail, addLike, createQuote } = api();

const detailTemplate = ({ beerId, name, description, image, price, ingredients, firstBrewed, brewersTips, likes, comment }) => `
  <header id="${beerId}">
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
      <img src="${image ? image : defaultImage}" />
    </div>
  </header>
  <div class="content">
  <p><a href="./index.html?search=${sessionStorage.getItem('beerName')}&year=${sessionStorage.getItem('beerYear')}"><button class="button primary">Back</button></a></p>
    <p>Price: $${price}</p>
    <p>First brewed: ${firstBrewed}</p>
    <h2>Description</h2>
    <p>${description}</p>
    <h2>Ingredients</h2>
    <p>Yeast: ${ingredients.yeast}</p>
    <h3>Malt</h3>
    <p><ul>${ingredients.malt.map(malt => `<li>${malt.name}: ${malt.amount.value} ${malt.amount.unit}</li>`).join('')}</ul></p>
    <h3>Hops</h3>
    <p><ul>${ingredients.hops.map(hops => `<li>${hops.name}: ${hops.amount.value} ${hops.amount.unit}, ${hops.add}, ${hops.attribute}</li>`).join('')}</ul></p>
    <h2>Brewer's Tips</h2>
    <p>${brewersTips}</p>
    <p>Likes: ${likes} <i class="fas fa-thumbs-up"></i><button id="like" class="button primary">I Like It!</button></p>
    <p><a href="./index.html?search=${sessionStorage.getItem('beerName')}&year=${sessionStorage.getItem('beerYear')}"><button class="button primary">Back</button></a></p>
    <h2>Comments</h2>
    <div id="quoteList">
    <p>${comment? comment.map(comment => `<p>${comment.dateComment}</p><p>${comment.comment}</p>`).join('') : []}</p>
    </div>
    </div>
`;

const renderDetail = async () => {
  try {
    const [, id] = window.location.search ?
      window.location.search.split('=') : [];
    const show = await getShowsDetail(id);
    const showHTML = detailTemplate(show);
    document.getElementById('detail').innerHTML = showHTML;
    const likeBtn = document.querySelector('#like')
likeBtn.addEventListener('click', addLike())
  } catch (e) {
    console.error(e);
  }
};

renderDetail();