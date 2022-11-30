const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'kanban_test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://kanban-list2.herokuapp.com/',
      browser: 'chrome',
//      basicAuth: {username: 'yoshinoqa+ta001@gmail.com', password: 'pass&word'},
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'kanban',
  translation: 'ja-JP',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
        enabled: true
    },
    tryTo: {
        enabled: true
    },
    screenshotOnFail: {
        enabled: true
    },
    allure: {
        enabled: true
    },
  }
}