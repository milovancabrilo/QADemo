let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const HelperMethods = require('../../../PageObjects/Utils/helperMethods.page.js');
const TechnologiesPage = require('../../../PageObjects/technologiesPage/technologiesPage.page.js');
const MainMenuPage = require('../../../PageObjects/playgroundPage/playgroundMainMenu.page.js');
const ErrorMsg = require('../../../PageObjects/commonElementsPage/errorMsgPage.page.js');


let Urls = require('../../../../../helpers/config/basicUrls.js');

const { browser } = require('protractor');

let TechnologiesSteps = function () {
    let helperMethods = new HelperMethods();
    let technologiesPage = new TechnologiesPage();
    let urls = new Urls();
    let mainMenuPage = new MainMenuPage();
    let errorMsg = new ErrorMsg();

    this.Given(
        /^Robot navigates to the project page$/,
        {timeout: 60 * 1000},
        function (callback) {
            browser.navigate().to(urls.projectUrl);
            callback();
        }
    );

    this.Given(
        /^Robot navigates to the technologies page$/,
        {timeout: 60 * 1000},
        function (callback) {
            browser.navigate().to(urls.technologiesUrl);
            callback();
        }
    );

    this.When(
        /^Robot clicks on the technologies button from the menu$/,
        {timeout: 120 * 1000},
        function (callback) {
            helperMethods.clickOnElement(mainMenuPage.tehnologiesBtn);
            callback();
        }
    );

    this.When(
        /^Robot clicks on the create technology button$/,
        {timeout: 120 * 1000},
        function (callback) {
            helperMethods.clickOnElement(technologiesPage.createTechBtn);
            callback();
        }
    );

    this.When(
        /^Robot fills technology title field with value: (.*)$/,
        {timeout: 60 * 1000},
        function (techTitle, callback) {
            technologiesPage.techTitleInput = techTitle;
            callback();
        }
    );

    this.When(
        /^Robot clicks on the Submit button on tech form$/,
        {timeout: 120 * 1000},
        function (callback) {
            helperMethods.clickOnElement(technologiesPage.submitBtn);
            callback();
        }
    );

    this.When(
        /^Robot check if technology with name (.*) is created and displayed$/,
        {timeout: 120 * 1000},
        async function (techTitle) {
            let createdTechnology = technologiesPage.getTechnologyByName(techTitle);
            expect(await createdTechnology.isDisplayed()).to.equal(true)
            expect(await createdTechnology.getText()).to.equal(techTitle)
        }
    );

    this.When(
        /^Robot clicks on the technology with title (.*)$/,
        {timeout: 120 * 1000},
        async function (techTitle) {
            let createdTechnology = technologiesPage.getTechnologyByName(techTitle);
            expect(await createdTechnology.isDisplayed()).to.equal(true)
            expect(await createdTechnology.getText()).to.equal(techTitle)
            await createdTechnology.click();
        }
    );

    this.When(
        /^App should show an error message (.*)$/,
        {timeout: 120 * 1000},
        async function (message) {
            let msg = errorMsg.getErrMsgByText(message);
            expect(await msg.isDisplayed()).to.equal(true)
            expect(await msg.getText()).to.equal(message)
        }
    );

    this.When(
        /^Robot try to create a tech if name contains (.*) characters$/,
        {timeout: 120 * 1000},
        async function (numOfChar) {
            technologiesPage.techTitleInput = helperMethods.createLongString(numOfChar);
            await browser.sleep(1000);
        }
    );
};

module.exports = TechnologiesSteps;
