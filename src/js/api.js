
const API_KEY = 'NY44K3Q-T1MMVTB-N0RZVX5-G1BD8Y1';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const SEARCH_API_URL = `${API_URL}beers?search=`;
  const SHOWS_URL = `${API_URL}beers`;
  return {
    addComment: async (id, text) => {
      try {
        const response = await fetch(`${SHOWS_URL}/${id}/comment`, {
          method: 'POST',
          body: JSON.stringify({
            comment: text,
          }),
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw 'Error';
        }
        const beer = await fetch(`${SHOWS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        })
        const json = await beer.json()
        return json.beer;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    addLike: async (id) => {
      try {
        const response = await fetch(`${SHOWS_URL}/${id}/like`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw 'Error';
        }
        const beer = await fetch(`${SHOWS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const json = await beer.json()
        const { likes } = json.beer;
        return likes;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    getShows: async (query) => {
      try {
        const requestUrl = query ?
          `${SEARCH_API_URL}${query}` :
          SHOWS_URL; 
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const datos = await response.json();
        const beers = datos.beers
        return beers;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    getShowsDetail: async (id) => {
      try {
        const response = await fetch(`${SHOWS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const show = await response.json();
        const beer = show.beer;
        return beer;
      } catch(e) {
        console.error(e);
      }
    },
  };
};

export default api;
