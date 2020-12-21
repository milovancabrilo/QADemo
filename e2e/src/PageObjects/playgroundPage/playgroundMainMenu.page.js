const PlaygroundMainMenu = function () {};
const utils = require('../Utils/utils.js');
const HelperMethods = require('../Utils/helperMethods.page.js');
const {browser} = require("protractor");
const {by} = require("protractor");
const helperMethods = new HelperMethods();
browser.waitForAngularEnabled(false);

PlaygroundMainMenu.prototype = Object.create(
  {},
  {
    /**************************************************
     *                     Fields                     *
     **************************************************/


    projectBtn: {
      get: function() {
        return utils.waitToElementBeClicable(
          by.xpath('//a//div[contains(text(),"PROJECTS")]'),
          6000,
          'projectBtn in main playground menu is not present'
        );
      }
    },

    teamsBtn: {
        get: function () {
            return utils.waitToElementBeClicable(
                by.xpath('//a//div[contains(text(),"TEAMS")]'),
                6000,
                'Teams btn in main playground menu is not present'
            );
        }
    },

    peopleBtn: {
      get: function() {
          return utils.waitToElementBeClicable(
              by.xpath('//a//div[contains(text(),"PEOPLE")]'),
              6000,
              'People btn in main playground menu is not present'
          );
      }
    },

    senioritiesBtn: {
        get: function () {
          return utils.waitToElementBeClicable(
                  by.xpath('//a//div[contains(text(),"SENIORITIES")]'),
                  6000,
                  'Seniorities btn in main playground menu is not present'
          );
      }
    },

    tehnologiesBtn: {
        get: function() {
              return utils.waitToElementBeClicable(
                  by.xpath('//a//div[contains(text(),"TECHNOLOGIES")]'),
                  6000,
                  'TECHNOLOGIES in main playground menu is not present'
              );
        }
    },

  }
);

module.exports = PlaygroundMainMenu;
