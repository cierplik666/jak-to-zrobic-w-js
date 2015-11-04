(function () {
    exports.config = {

        ///////////////////////////////////////////////////////////////////////////////////
        // Various test running options. Use only one at a time.

        // Use directConnect option to connect directly to Chrome browser, without Selenium. Works only for Chrome and
        // Firefox.
        directConnect: true,
        chromeDriver: require('chromedriver').path,
        // Use seleniumAddress option is Selenium server is started manually
        //seleniumAddress: 'http://localhost:4444/wd/hub',
        //seleniumAddress: 'http://hub.browserstack.com/wd/hub',

        // Use seleniumServerJar option to automatically start Selenium server
        //seleniumServerJar: require('selenium-server-standalone-jar').path,

        ///////////////////////////////////////////////////////////////////////////////////

        specs: ['../src/specs/minimal.spec.js'],

        /// MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

        capabilities: {
            'browserName' : 'firefox',
        }

    };

})();