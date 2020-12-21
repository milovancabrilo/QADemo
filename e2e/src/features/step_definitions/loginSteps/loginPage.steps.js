let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const HelperMethods = require('../../../PageObjects/Utils/helperMethods.page.js');
const LoginPage = require('../../../PageObjects/loginPage/loginPage.page.js');
let Urls = require('../../../../../helpers/config/basicUrls.js');

const { browser } = require('protractor');

let LoginPageSteps = function () {
    let helperMethods = new HelperMethods();
    let loginPage = new LoginPage();
    let urls = new Urls();

    this.Given(
        /^Robot navigates to the login page$/,
        {timeout: 60 * 1000},
        function (callback) {
            browser.navigate().to(urls.loginUrl);
            callback();
        }
    );

    this.When(
        /^Robot clicks on the Sing In button$/,
        {timeout: 120 * 1000},
        function (callback) {
            helperMethods.clickOnElement(loginPage.submitBtn);
            //browser.sleep(3000).then(function() {
            callback();
            // });
        }
    );

    this.Then(
        /^Robot wants to see if user is logged in to the app$/,
        {timeout: 60 * 1000},
        async function () {
            await browser.sleep(3000);
        }
    );

    this.When(
        /^Robot fills user name field with value: (.*)$/,
        {timeout: 60 * 1000},
        function (userName, callback) {
            loginPage.userNameField = userName;
            callback();
        }
    );

    this.When(
        /^Robot fills password field with value: (.*)$/,
        {timeout: 60 * 1000},
        function (password, callback) {
            loginPage.passwordField = password;
            callback();
        }
    );

};

module.exports = LoginPageSteps;
