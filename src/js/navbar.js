import { renderDOMShows } from './shows';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelectorAll('.input.search');

searchForm.addEventListener('submit', (evt) => {

  evt.preventDefault();

  sessionStorage.setItem('beerName', searchInput[0].value);
  sessionStorage.setItem('beerYear', searchInput[1].value);

  if (sessionStorage.getItem('beerName') !== '' || sessionStorage.getItem('beerYear') !== '') {

    console.log('TCL: beerName', sessionStorage.getItem('beerName'))
    console.log('TCL: beerYear', sessionStorage.getItem('beerYear'))

    renderDOMShows(sessionStorage.getItem('beerName'), sessionStorage.getItem('beerYear'));
  }
});