import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://api.tvmaze.com/shows?q=';
export function getTVShows() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
