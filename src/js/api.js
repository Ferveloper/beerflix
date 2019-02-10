
const API_KEY = 'NY44K3Q-T1MMVTB-N0RZVX5-G1BD8Y1';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const SEARCH_API_URL = `${API_URL}/beers?search=`;
  const SHOWS_URL = `${API_URL}beers`;
  return {
    createQuote: async (id, text) => {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'POST',
          body: JSON.stringify({
            quote: text,
          }),
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw 'Error';
        }
        const quote = await response.json();
        return quote;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    getShows: async (query) => {
      try {
        const requestUrl = query ?
          `${SEARCH_API_URL}${query}&limit=10` :
          SHOWS_URL;
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const datos = await response.json();
				console.log('TCL: api -> datos', datos)
        const beers = datos.beers
				console.log('TCL: api -> beers', beers)
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
