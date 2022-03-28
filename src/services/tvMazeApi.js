import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://api.tvmaze.com/shows';
export function getTVShows() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
