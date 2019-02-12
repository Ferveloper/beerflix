import { renderDOMShows } from './shows';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelectorAll('.input.search');

searchForm.addEventListener('submit', (evt) => {
  const beerName = searchInput[0].value;
  const beerYear = searchInput[1].value;
  evt.preventDefault();
  if (beerName !== '' || beerYear !== '') {
    console.log('TCL: beerName', beerName)
    console.log('TCL: beerYear', beerYear)
    renderDOMShows(beerName, beerYear);
  }
});
