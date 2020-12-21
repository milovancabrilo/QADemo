const {browser} = require("protractor");

const hooks = function () {
    //create a screenshots if some step is failed and after every singe test
    this.After({tags: ["@takeScreenshotE2E"], timeout: 60 * 1000}, function (scenario, callback) {

        if (scenario.isFailed()) {
            browser.takeScreenshot().then(
                function (png) {
                    const decodedImage = Buffer.from(
                        png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''),
                        'base64'
                    );
                    scenario.attach(decodedImage, 'image/png');
                    callback();
                },
                function (err) {
                    callback(err);
                }
            );
        } else if (scenario.isFailed() === false) {
            browser.takeScreenshot().then(
                function (png) {
                    const decodedImage = Buffer.from(
                        png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''),
                        'base64'
                    );
                    scenario.attach(decodedImage, 'image/png');
                    callback();
                },
                function (err) {
                    callback(err);
                }
            );
        }
    });
};
module.exports = hooks;
