const TechnologiesPage = function () {};
const utils = require('../Utils/utils.js');
const HelperMethods = require('../Utils/helperMethods.page.js');
const {browser} = require("protractor");
const {by} = require("protractor");
const helperMethods = new HelperMethods();
browser.waitForAngularEnabled(false);

TechnologiesPage.prototype = Object.create({}, {

    /**************************************************
     *                     Fields                     *
     **************************************************/

    createTechBtn: {
        get: function() {
            return utils.waitToElementBeClicable(
                by.xpath('//a[@ href="/create-technology"]//span'),
                6000,
                'createTech button is not present'
            );
        }
    },

    techTitleInput: {
        get: function() {
            return utils.waitForElementPresence(
                by.xpath('//input[@ name="technology_title"]'),

                6000,
                'techTitleInput field is not present'
            );
        },
        set: function(techTitle) {
            this.techTitleInput.clear();
            this.techTitleInput.sendKeys(techTitle);
            helperMethods.escapeFromField();
        }
    },

    submitBtn: {
        get: function() {
            return utils.waitToElementBeClicable(
                by.xpath('//button[@ type="submit"]'),
                6000,
                'submitBtn button is not present'
            );
        }
    },

    getTechnologyByName: {
        value: function (techName) {
            return utils.waitForElementPresence(
                by.xpath('//div//a[contains(text(), "' + techName +'")]'),
                20000,
                "Technology is not present");
        }
    }
  }
);

module.exports = TechnologiesPage;
