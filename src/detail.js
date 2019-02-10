import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm';
import defaultImage from './images/default.jpg';

const { getShowsDetail } = api();

const detailTemplate = ({ beerId, name, description, image }) => `
  <header id="${beerId}">
  <a href="./index.html"><button class="button">Back</button></a>
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
      <img src="${image ? image : defaultImage}" />
    </div>
  </header>
  <div class="content">
    ${description}
   <a href="./index.html"><button class="button">Back</button></a> 
  </div>
  
`;

const renderDetail = async () => {
  try {
    const [, id] = window.location.search ?
      window.location.search.split('=') : [];
    const show = await getShowsDetail(id);
    const showHTML = detailTemplate(show);
    document.getElementById('detail').innerHTML = showHTML;
  } catch (e) {
    console.error(e);
  }
};

renderDetail();

console.log('DETAIL!!!!!!');