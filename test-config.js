const allure = require('allure-commandline')
const config = require("./config.json")
const fs = require("fs");


try {
    
    const jsonString = fs.readFileSync("./config.json");
    const config = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    
  }
  console.log(config.deviceName); 

exports.config={
    runner:'local',
    port:4723,
    host:'http://127.0.0.1',
    path:'/wd/hub',
    logLevel:'info',
    framework:'mocha',
    mochaOpts:{
        ui:'bdd',
        require:['@babel/register'],
        timeout: 600000
    },

    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false

        }],
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
          if(error) {
              await browser.takeScreenshot()
          }

    },


   maxInstances:1,
   sync:true,
   specs:['.\\Tests\\'+config['test-file']],
   capabilities:[{
    "platformName": "iOS",
    "appium:deviceName": config.deviceName,
    "appium:platformVersion": "15.5",
    "appium:automationName": "XCUITest",
    "appium:udid": config.udid,
    "appium:app": __dirname+"/resources/app/"+config.app,
    "appium:autoGrantPermissions": true,
    "appium:fullReset": true,
    "appium:newCommandTimeout": "180"
  }
  ]

   
}