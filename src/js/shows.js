import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';
import defaultImg from './../images/default.jpg';

const { getShows } = api();

const templateShow = ({ beerId, name, image, description, likes, principal }) => `
  <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <a href="./detail.html?id=${beerId}"><img src="${image ? image : defaultImg}"></a>
      </div>
      <div class="card-content-text">
        <p>${striptags(description)}</p>
        <p><a href="./detail.html?id=${beerId}"><button class="button primary">Show Details</button></a></p>
        <div class="rating-container">
            <i class="fas fa-thumbs-up"></i><span class="likes">${likes}</span>
        </div>
      </div>
    </div>
  </div>
`;

const renderShows = (element, shows) => {
  const htmlShows = shows.map((show, index) => {
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

