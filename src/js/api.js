const api = (API_URL = 'http://api.tvmaze.com/') => {
  const SEARCH_API_URL = `${API_URL}search/shows?q=`;
  const SHOWS_URL = `${API_URL}shows`;
  return {
    getShows: async (query) => {
      try {
        const requestUrl = query ?
          `${SEARCH_API_URL}${query}` :
          SHOWS_URL;
        const response = await fetch(requestUrl);
        const datos = await response.json();
        const mapDatos = datos.map((dato) => {
          if (dato.show) {
            return dato.show;
          }
          return dato;
        });
        return mapDatos;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  };
};

export default api;