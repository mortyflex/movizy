import API_KEY from "../Helpers/apiKey";

const getFilmsFromApi = async text => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr&query=${text}&page=1&include_adult=false`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data.results;
};

export { getFilmsFromApi };
