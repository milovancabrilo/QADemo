const Urls = require('../config/basicUrls.js');
let HttpRequest = function () {
    let urls = new Urls();

    let Options = {
        baseUrl: urls.baseUrl,
        url: '',
        method: '',
        headers:{},
        jar: true,
        encoding: null,
        //rejectUnauthorized: false,
        json: {}
    };

    this.createGetRequest = function(controller, objType, objectId, token){
        Options.url = urls.apiUrl + '/' + controller + '/' + objType + '/' + objectId;
        Options.method = 'GET';
        Options.headers = {
            "Authorization": 'Bearer ' + token
        }
        return Options;
    };

    this.createGetAllRequest = function(controller, token){
        Options.url = urls.apiUrl + '/' + controller + '/' + 'all';
        Options.method = 'GET';
        Options.headers = {
            "Authorization": 'Bearer ' + token
        }
        return Options;
    };

    this.createPostRequest = function(controller, objType, object, token){
        Options.url = urls.apiUrl + '/' + controller + '/' + objType
        Options.method = 'POST';
        Options.headers = {
            "Authorization": 'Bearer ' + token
        };
        Options.json = object;
        return Options;
    };

    this.createPostWithoutHeadersRequest = function(controller, objType, object){
        Options.url = urls.apiUrl + '/' + controller + '/' + objType
        Options.method = 'POST';
        Options.json = object;
        return Options;
    };

    this.createDeleteRequest = function(controller, objType, objectId, token){
        Options.url = urls.apiUrl + '/' + controller + '/' + objType + '/' + objectId;
        Options.method = 'DELETE';
        Options.headers = {
            "Authorization": 'Bearer ' + token
        }
        return Options;
    };

    this.createPutRequest = function(controller, objType, objectId, object, token){
        Options.url = urls.apiUrl + '/' + controller + '/' + objType + '/' + objectId;
        Options.method = 'PUT';
        Options.headers = {
            "Authorization": 'Bearer ' + token
        };
        Options.json = object;
        return Options;
    };
};
module.exports = HttpRequest;