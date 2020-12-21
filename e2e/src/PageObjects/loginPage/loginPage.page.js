const LoginPage = function () {
};
const utils = require('../Utils/utils.js');
const HelperMethods = require('../Utils/helperMethods.page.js');
const {browser} = require("protractor");
const {by} = require("protractor");
const helperMethods = new HelperMethods();
browser.waitForAngularEnabled(false);

LoginPage.prototype = Object.create(
  {},
  {
    /**************************************************
     *                     Fields                     *
     **************************************************/


    userNameField: {
      get: function() {
        return utils.waitForElementPresence(
          by.xpath('//input[@ type="email"]'),
          6000,
          'User name field is not present'
        );
      },
      set: function(userName) {
        this.userNameField.clear();
        this.userNameField.sendKeys(userName);
        helperMethods.escapeFromField();
      }
    },

    passwordField: {
      get: function() {
        return utils.waitForElementPresence(
          by.xpath('//input[@ type="password"]'),
       
          6000,
          'Password field is not present'
        );
      },
      set: function(pass) {
        this.passwordField.clear();
        this.passwordField.sendKeys(pass);
        helperMethods.escapeFromField();
      }
    },

    submitBtn: {
      get: function() {
        return utils.waitToElementBeClicable(
          by.xpath('//button[@ type="submit"]'),
          6000,
          'Sing in button is not present'
        );
      }
    },


    /**************************************************
     *                     Methods                     *
     **************************************************/

    loginMethod: {
      value: function(userName, pass) {
        this.userNameField = userName;
        this.passwordField = pass;
        this.submitBtn.click().then(function() {
          browser.sleep(2000);
        });
      }
    }
  }
);

module.exports = LoginPage;
