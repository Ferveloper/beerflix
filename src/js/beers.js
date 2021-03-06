import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';
import defaultImg from '../images/default.jpg';

const { getBeers } = api();

const templateBeer = ({ beerId, name, image, description, likes, firstBrewed, price, index, principal }) => `
  <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>${index + 1}. ${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <a href="./detail.html?id=${beerId}"><img src="${image ? image : defaultImg}"></a>
      </div>
      <div class="card-content-text">
        <p><span class="bold">First Brewed:</span> ${firstBrewed}</p>
        <p><span class="bold">Price:</span> $${price}</p>
        <p>${striptags(description)}</p>
        <p><a href="./detail.html?id=${beerId}"><button class="button primary">Show Details</button></a></p>
        <div class="rating-container">
            <i class="fas fa-thumbs-up"></i><span class="likes">${likes}</span>
        </div>
      </div>
    </div>
  </div>
`;

const renderBeers = (element, beers) => {
  const htmlBeers = beers.slice(0, 10).map((beer, index) => {
    if (index < 2) {
      return templateBeer({ ...beer, index, principal: true });
    }
    return templateBeer({ ...beer, index, principal: false });
  }).join('');
  element.innerHTML = htmlBeers;
  const headers = document.querySelectorAll('.card.secondary .card-header');
  headers.forEach((header) => {
    const id = header.parentNode.getAttribute('id');
    header.addEventListener('click', openHeader(id));
  });
};

export const renderDOMBeers = async (query, year) => {
  try {
    const fetchShows = await getBeers(query);
    const filterBeers = (year) ? fetchShows.filter(beer => beer.firstBrewed.substring(3, ) === year) : fetchShows;
    const showSection = document.getElementById('beers-section');
    renderBeers(showSection, filterBeers);
  } catch (e) {
    console.error(e);
  }
};

sessionStorage.setItem('beerName', '');
sessionStorage.setItem('beerYear', '');

if (window.location.search) {
  const [beerName, beerYear] = window.location.search.split('&').map(param => param.split('=')[1]);
  sessionStorage.setItem('beerName', beerName);
  sessionStorage.setItem('beerYear', beerYear);
  renderDOMBeers(sessionStorage.getItem('beerName'), sessionStorage.getItem('beerYear'));
} else {
  renderDOMBeers();
}

