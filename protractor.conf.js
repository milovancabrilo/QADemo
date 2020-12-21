// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


exports.config = {

  // run selenium server
  // directConnect: true,
  // chromeDriver: './../node_modules/protractor/node_modules/selenium-webdriver/chromedriver.exe',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  allScriptsTimeout: 300000,
  getPageTimeout: 300000,
  ignoreUncaughtExceptions: true,

  // browsers
//  capabilities: {
//     browserName: 'chrome',
//     chromeOptions: {
//       args: [/*'--headless'*/'--disable-gpu']
//     },
//       metadata: {
//                 device: 'Local Environment',
//                 platform: {
//                   name: 'windows',
//                   version: '2004'
//                 }
//               }
//   },
  multiCapabilities: [
      // {'browserName': 'firefox',
      //  metadata: {
      //   device: 'Local Environment',
      //   platform: {
      //     name: 'windows',
      //     version: '2004'
      //   }
      // }
      // },
      {'browserName': 'chrome',
        metadata: {
          device: 'Local Environment',
          platform: {
          name: 'windows',
          version: '2004'
          }
        }
      },
      // {'browserName': 'MicrosoftEdge'},
   ],
  baseUrl: '',

  onPrepare: function() {
    
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(1000);
  },
  specs:[
      'e2e/src/features/**/loginPage.feature',
      'e2e/src/features/technologiesFeatures/technologiesPage.feature',
      'ApiTests/src/features/technologiesFeatures/createTechnologiesApi.feature',

  ],

  cucumberOpts: {
    require: [
      'e2e/src/features/step_definitions/loginSteps/loginPage.steps.js',
      'ApiTests/src/features/step_definitions/technologiesSteps/technologies.steps.js',
      'e2e/src/features/step_definitions/technologiesSteps/technologies.steps.js',
      'e2e/src/features/step_definitions/hooks.js'
    ],

    tags: [],
    format: 'json:e2eReport/tmp/results.json',
    //format: 'pretty',
    strict: true,
    dryRun: true,
    defaultTimeout: 10000,
  },
  plugins: [{
    package: require.resolve ('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      reportPath: './e2eReport/Report',
      openReportInBrowser: true,
      jsonOutputPath: "./e2eReport/ReportJSON",
      displayDuration: true,
      //durationInMS: true,
      metadata: []
    }
  }]
};
