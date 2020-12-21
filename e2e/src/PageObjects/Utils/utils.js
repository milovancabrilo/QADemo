const {browser} = require("protractor");
const {element} = require("protractor");
const {protractor} = require("protractor");
const EC = protractor.ExpectedConditions;
const utils = {};

utils.waitForElementVisibility = function (selector, interval, message) {
    const el = element(selector);
    browser.wait(EC.visibilityOf(el), interval, message);
    return element(selector);
};

utils.waitToElementBeClicable = function (selector, interval, message) {
    const el = element(selector);
    browser.wait(EC.elementToBeClickable(el), interval, message);
    return element(selector);
};

utils.waitForElementPresence = function (selector, interval, message) {
    const el = element(selector);
    browser.wait(EC.visibilityOf(el), interval, message);
    return element(selector);
};

utils.waitForElementsPresence = function (selector, interval, message) {
    const el = element.all(selector);
    browser.wait(EC.visibilityOf(el), interval, message);
  return el;
};

utils.waitForElementDisappear = function (selector, interval, message) {
    const el = element(selector);
    const disapearCondition = EC.not(EC.visibilityOf(el));
    browser.wait(disapearCondition, interval, message);
    return element(selector);
};


module.exports = utils;
