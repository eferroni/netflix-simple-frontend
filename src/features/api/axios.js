import axios from "axios";

export const imageBaseURL = "https://image.tmdb.org/t/p/original";
export const baseURL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
