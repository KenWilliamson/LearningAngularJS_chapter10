module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            "public_html/js/libs/angular.min.js",
            "public_html/js/libs/angular-mocks.js",
            "public_html/js/libs/angular-route.min.js",
            "public_html/js/libs/angular-resource.min.js",
            "public_html/js/libs/angular-cookies.min.js",
            "public_html/js/*.js",
            'public_html/partials/*.html',
            "test/**/*Spec.js"
            
        ],
        preprocessors: {
            'public_html/partials/*.html': ['ng-html2js']
        },
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-ng-html2js-preprocessor"
        ],
        
        ngHtml2JsPreprocessor: {            
            stripPrefix: 'public_html/'
        }
        
    });
};