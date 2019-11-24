import API_KEY from "../Helpers/apiKey";

const getFilmsFromApi = async (text, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr&query=${text}&page=${page}&include_adult=false`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
};

const getImageFromApi = name => {
  return `https://image.tmdb.org/t/p/w300${name}`;
};

export { getFilmsFromApi, getImageFromApi };
