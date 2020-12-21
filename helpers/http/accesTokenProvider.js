const HttpClient = require('protractor-http-client').HttpClient;
const HttpMessageBuilder = require('./httpMessageBuilder.js');
const Urls = require('../config/basicUrls.js');


const AccessTokenProvider = function () {
    let urls = new Urls();
    const http = new HttpClient(urls.baseUrl);
    const httpMessageBuilder = new HttpMessageBuilder();

    this.getAccessToken = async function (email, password) {
         let loginOptions = httpMessageBuilder.createPostWithoutHeadersRequest("users", "login", {email: email, password: password});
         let response = await http.request(loginOptions);
         return response.body.token;
    };
};
module.exports = AccessTokenProvider;