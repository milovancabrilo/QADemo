const ErrorMsgPage = function () {};
const utils = require('../Utils/utils.js');
const HelperMethods = require('../Utils/helperMethods.page.js');
const {browser} = require("protractor");
const {by} = require("protractor");
const helperMethods = new HelperMethods();
browser.waitForAngularEnabled(false);

ErrorMsgPage.prototype = Object.create({}, {

    /**************************************************
     *                     Method                     *
     **************************************************/

    getErrMsgByText: {
        value: function (errText) {
            return utils.waitForElementPresence(
                by.xpath('//div[contains(text(), "' + errText +'")]'),
                6000,
                "errText is not present");
        }
    }
  }
);

module.exports = ErrorMsgPage;
