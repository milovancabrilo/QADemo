let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const HttpClient = require('protractor-http-client').HttpClient;
let Urls = require('../../../../../helpers/config/basicUrls.js');
let EntitiesMessageBuilder = require('../../../../../helpers/Entities/entitiesMessageBuilder.js');
let AccessTokenProvider = require('../../../../../helpers/http/accesTokenProvider.js');
let Technology = require('../../../../../helpers/Entities/entitiesLibrary.js');
let HelperMethods = require('../../../../../e2e/src/PageObjects/Utils/helperMethods.page.js');


let TechnologiesSteps = function () {

    let urls = new Urls();
    let helperMethods = new HelperMethods();
    let techMessageBuilder = new EntitiesMessageBuilder("technologies", "technology");
    // let senMessageBuilder = new EntitiesMessageBuilder("seniorities", "seniority");
    // let teamMessageBuilder = new EntitiesMessageBuilder("roles", "role");
    let accessTokenProvider = new AccessTokenProvider();
    let httpClient = new HttpClient(urls.baseUrl);
    let accessToken = accessTokenProvider.getAccessToken("milovancabrilo@gmail.com", "bananamen1984");
    let technology = new Technology();
    let requestResponseStatusCode, requestBody, techId;

    this.When(
        /^Robot create technology with name: (.*), and expect status code (.*)$/,
        {timeout: 120 * 1000},
        async function (technologyName, statusCode) {
            technology.technology_title = technologyName;
            let options = techMessageBuilder.createPostRequest(technology, await accessToken);
            let response = await httpClient.request(options);

            expect(response.statusCode).to.equal(parseInt(statusCode));
            expect(response.body.technology_title).to.equal(technologyName);

            requestResponseStatusCode = response.statusCode;
            requestBody = response.body;
            techId = response.body.technology_id;
            this.techId = response.body.technology_id;
        }
    );

    this.Then(
        /^Robot use GET technology request, and expect status code (.*)$/,
        {timeout: 60 * 1000},
        async function (statusCode) {
            let options = techMessageBuilder.createGetRequest(techId, await accessToken)
            let response = await httpClient.request(options);
            console.log(response.statusCode);
            requestResponseStatusCode = response.statusCode;
            requestBody = response.body;
            expect(requestResponseStatusCode).to.equal(parseInt(statusCode));
        }
    );

    this.Then(
        /^Robot delete technology with name: (.*) through an HTTP request, and expect status code (.*)$/,
        {timeout: 60 * 1000},
        async function (techTitle, statusCode) {
            let options = techMessageBuilder.createDeleteRequest(techId, await accessToken)
            let response = await httpClient.request(options);
            console.log(response.statusCode);
            requestResponseStatusCode = response.statusCode;
            requestBody = response.body;
            expect(requestResponseStatusCode).to.equal(parseInt(statusCode));
        }
    );

    this.When(
        /^Robot create technology with name: (.*), expect status code (.*), and response (.*)$/,
        {timeout: 120 * 1000},
        async function (technologyName, statusCode, message) {
            technology.technology_title = technologyName;
            let options = techMessageBuilder.createPostRequest(technology, await accessToken);
            let response = await httpClient.request(options);

            expect(response.statusCode).to.equal(parseInt(statusCode));
            expect(response.body.technology_title).to.equal(message);

            requestResponseStatusCode = response.statusCode;
            requestBody = response.body;
            techId = response.body.technology_id;
        }
    );

    this.When(
        /^Robot try to create a tech if name contains (.*) characters, expect status code (.*), and response (.*)$/,
        {timeout: 120 * 1000},
        async function (numOfChar, statusCode, message) {
            technology.technology_title = helperMethods.createLongString(numOfChar);
            let options = techMessageBuilder.createPostRequest(technology, await accessToken);
            let response = await httpClient.request(options);

            expect(response.statusCode).to.equal(parseInt(statusCode));
            expect(response.body.technology_title).to.equal(message);

            requestResponseStatusCode = response.statusCode;
            requestBody = response.body;
            techId = response.body.technology_id;
        }
    );

    this.After({tags: ["@attachStatusAndBodyToReporter"], timeout: 60 * 1000 }, async function(scenario) {
        if (scenario) {
            let statusCodeMsg = 'Status code is :' + requestResponseStatusCode.toString();
            let resBodyMsg = 'Response body is :' +  JSON.stringify(requestBody);

            scenario.attach(statusCodeMsg, 'text/plain');
            scenario.attach(resBodyMsg, 'text/plain');
            }
        }
    );

    this.After({tags: ["@deleteAllTechnology"], timeout: 60 * 1000 }, async function(scenario) {
            if (scenario) {
                let options = techMessageBuilder.createGetAllRequest(await accessToken)
                let response = await httpClient.request(options);
                let allTeamsObj = response.body;
                for (let i = 0; i < allTeamsObj.length; i++) {
                    let options = techMessageBuilder.createDeleteRequest(allTeamsObj[i].technology_id, await accessToken)
                    let response = await httpClient.request(options);
                }
            }
        }
    );
};

module.exports = TechnologiesSteps;