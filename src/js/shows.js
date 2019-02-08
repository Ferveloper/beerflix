import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';
import defaultImg from './../images/default.jpg';

const { getShows } = api();

const templateShow = ({ id, name, image, summary, principal }) => `
  <div id="${id}" class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image ? image.medium : defaultImg}">
      </div>
      <div class="card-content-text">
        <p>${striptags(summary)}</p>
        <div class="rating-container">
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

const renderShows = (element, shows) => {
  const htmlShows = shows.slice(0, 6).map((show, index) => {
    if (index < 2) {
      return templateShow({
        ...show,
        principal: true,
      });
    }
    return templateShow({ ...show, principal: false });
  }).join('');
  element.innerHTML = htmlShows;
  const headers = document.querySelectorAll('.card.secondary .card-header');
  headers.forEach((header) => {
    const id = header.parentNode.getAttribute('id');
    header.addEventListener('click', openHeader(id));
  });
};

export const renderDOMShows = async (query) => {
  try {
    const fetchShows = await getShows(query);
    const showSection = document.getElementById('show-section');
    renderShows(showSection, fetchShows);
  } catch (e) {
    console.error(e);
  }
};

renderDOMShows();

