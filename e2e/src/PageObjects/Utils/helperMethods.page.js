const {element} = require("protractor");
const {protractor} = require("protractor");
const {browser} = require("protractor");
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const HelperMethodsPage = function () {};

HelperMethodsPage.prototype = Object.create({}, {

    scrollToElement: {
      value: function(elemFinder) {
        browser.executeScript('arguments[0].scrollIntoView(false)', elemFinder);
      }
    },

    clearElement: {
      value: async function(formElement) {
        await formElement.clear();
        browser.sleep(500);
      }
    },

    escapeFromField: {
      value: function() {
        browser.actions().sendKeys(protractor.Key.TAB);
      }
    },

    hitEnter: {
      value: function() {
        browser.actions().sendKeys(protractor.Key.ENTER);
      }
    },

    getTextFromElementByValue: {
      value: function(formElement) {
        console.log(formElement);
          let textValue;
          formElement.getAttribute('value').then(function(text) {
          textValue = text;
          console.log(textValue);
          return textValue;
        });
      }
    },

    getUrl: {
      value: function() {
          let pageUrl;
          browser.getCurrentUrl().then(function(url) {
          pageUrl = url;
          console.log(pageUrl);
          return pageUrl;
        });
      }
    },

    clickOnElement: {
      value: function(element) {
        browser
          .actions()
          .mouseMove(element)
          .click()
          .perform();
      }
    },

    goToHomePage: {
      value: function() {
        browser.navigate().to('http://connect.ldev.cloudi.city:11000');
      }
    },

    navigateToPage: {
      value: function(url) {
        browser.navigate().to(url);
      }
    },

    IsElementDisplayed: {
      value: function(element, expectedResult) {
        element.isDisplayed().then(function(result) {
          return expect(result).to.equal(expectedResult);
        });
      }
    },

    getTextFromEl: {
      value: function(element, msg) {
        element.getText().then(function(result) {
          return expect(result).to.equal(msg);
        });
      }
    },

    usersRowCheck: {
      value: function(userRows,expectedUsers){
        return expect(userRows).to.equal(expectedUsers);
      }
    },

    scrollToPageBottom: {
      value: function () {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
      }
    },

    createLongString: {
      value: function (numOfCharacters) {
          let result = '';
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;
          for (let i = 0; i < numOfCharacters; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          console.log(result)
          return result;
      }
    },

    mouseOverElement: {
      value: async function(element){
        await browser.actions().mouseMove(element.getWebElement()).perform(); 
        await browser.sleep(1000);
      }
    },

    dragAndDropPerform: {
      value: async function(dragElement, dropForm) {
        await browser.actions().
        mouseMove(dragElement.getWebElement()).
        mouseDown().
        mouseMove(dropForm.getWebElement()).
        mouseUp(dropForm.getWebElement()).
        perform().then(function() {
          browser.sleep(1000);
          console.log('drag and drop is performed');
        });
      }
    },

    tableRowLength: {
      value: function (){
        browser.sleep(1500).then(function () {
          element.all(by.xpath('//tbody//tr')).then(function (res) {
            console.log('Result of table length ' + res.length);
            console.log(typeof res.length);
              const displayedUsers = res.length.toString();
              console.log(typeof displayedUsers);
            return displayedUsers
          });
        });
      }
    }
  }
);

module.exports = HelperMethodsPage;
