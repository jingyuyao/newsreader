/*
 * Base class for all APIs containing generic and helper functions.
 */
class BaseApi {
    /*
     * Should return the list of posts served as default to a user.
     */
    frontPage() {
        throw "Not implemented";
    }

    /*
     * Utilities
     */
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
