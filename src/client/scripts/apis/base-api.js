/*
 * Base class for all APIs containing generic and helper functions.
 */
class BaseApi {
    checkStatus(response) {
        if (200 <= response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(response);
        }
    }

    toJson(response) {
        return response.json();
    }
}

export default BaseApi;
