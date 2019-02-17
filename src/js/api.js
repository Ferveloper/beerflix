const API_KEY = 'NY44K3Q-T1MMVTB-N0RZVX5-G1BD8Y1';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const SEARCH_API_URL = `${API_URL}beers?search=`;
  const BEERS_URL = `${API_URL}beers`;
  return {
    addComment: async (id, text) => {
      try {
        const response = await fetch(`${BEERS_URL}/${id}/comment`, {
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
        const beer = await fetch(`${BEERS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const json = await beer.json();
        return json.beer;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    addLike: async (id) => {
      try {
        const response = await fetch(`${BEERS_URL}/${id}/like`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw 'Error';
        }
        const beer = await fetch(`${BEERS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const json = await beer.json();
        const { likes } = json.beer;
        return likes;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    getBeers: async (query) => {
      try {
        const requestUrl = query ? `${SEARCH_API_URL}${query}` : BEERS_URL;
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const json = await response.json();
        return json.beers;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    getBeerDetail: async (id) => {
      try {
        const response = await fetch(`${BEERS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        });
        const json = await response.json();
        return json.beer;
      } catch (e) {
        console.error(e);
      }
    },
  };
};

export default api;
