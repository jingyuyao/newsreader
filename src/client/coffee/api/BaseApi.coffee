###
# Base class for all APIs containing generic and helper functions.
###
class BaseApi
    checkStatus: (response) ->
        if 200 <= response.status < 300
            Promise.resolve response
        else
            Promise.reject response

    toJson: (response) ->
        response.json()

module.exports = BaseApi
