const HttpMessageBuilder = require('../http/httpMessageBuilder.js');

const EntitiesMessageBuilder = function (conName, oType) {
    let httpMessageBuilder = new HttpMessageBuilder();
    const controllerName = conName;
    const objType = oType;

    this.createGetRequest = function(objectId, token){
       return httpMessageBuilder.createGetRequest(controllerName, objType, objectId, token);
    };

    this.createGetAllRequest = function(token){
        return httpMessageBuilder.createGetAllRequest(controllerName, token);
    };

    this.createPostRequest = function(object, token){
       return httpMessageBuilder.createPostRequest(controllerName,objType, object, token);
    };

    this.createDeleteRequest = function(objectId, token){
       return httpMessageBuilder.createDeleteRequest(controllerName, objType, objectId, token);
    };

    this.createPutRequest = function(objectId, object, token){
       return httpMessageBuilder.createPutRequest(controllerName, objType, objectId, object, token);
    };
};
module.exports = EntitiesMessageBuilder;