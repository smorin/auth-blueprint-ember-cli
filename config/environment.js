/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer:               'simple-auth-authorizer:oauth2-bearer',
    routeAfterAuthentication: 'internal',
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: 'http://localhost:4200/token'
  };

  ENV['torii'] = {
    providers: {
      'facebook-oauth2': {
        apiKey: '1621193478128849'
      }
    }
  };

  if (environment === 'development') {
    ENV.restAPINamespace      = '';
    ENV.apiServer             = 'http://localhost:4200';
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:4200",
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['simple-auth-oauth2'].serverTokenEndpoint = '/token';
  }

  if (environment === 'production') {

  }

  return ENV;
};
