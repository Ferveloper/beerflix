const navbar = document.getElementById('navbar');
const searchIcon = document.getElementById('navbar-search');
const closeIcon = document.getElementById('navbar-close');

const toggle = element =>
  (removeClass, addClass) => {
  element.classList.remove(removeClass);
  element.classList.add(addClass);
};

const navbarVariable = toggle(navbar);

searchIcon.addEventListener('click', () => 
  navbarVariable('no-search', 'search'));

closeIcon.addEventListener('click', () => 
  navbarVariable('search', 'no-search'));

const openHeader = (id) => (evt) => {
  console.log(evt);
  const element = document.getElementById(id);
  element.classList.toggle('close');
};

export {
  openHeader,
};
