import 'core-js/shim';
import 'whatwg-fetch';

export default fetch;

/**
 * Fetch the url and parse the result as JSON if the call succeeds.
 * Rejects with the response if the call fails (i.e error code >= 300)
 * @param  {string} url  The url to fetch.
 * @return {Promise}     The result of the fetch
 */
export function getJson(url) {
    return fetch(url)
            .then(checkStatus)
            .then(toJson);
}

/**
 * Resolve or reject the response depending on the status code.
 * @param  {Response} response  A response from the fetch api.
 * @return {Response}           Return the response if status is good.
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

/**
 * Return the JSON representation of the reponse.
 * @param  {Reponse} response A response from the fetch api.
 * @return {Object}           A JSON representation of the reponse.
 */
function toJson(response) {
    return response.json();
}