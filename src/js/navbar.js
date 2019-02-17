import { renderDOMBeers } from './beers';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelectorAll('.input.search');

searchInput[0].value = sessionStorage.getItem('beerName');
searchInput[1].value = sessionStorage.getItem('beerYear');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sessionStorage.setItem('beerName', searchInput[0].value);
  sessionStorage.setItem('beerYear', searchInput[1].value);
  if (sessionStorage.getItem('beerName') !== '' || sessionStorage.getItem('beerYear') !== '') {
    renderDOMBeers(sessionStorage.getItem('beerName'), sessionStorage.getItem('beerYear'));
  }
});
