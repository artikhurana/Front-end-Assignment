(function (global) {
  System.config({
    defaultJSExtensions: true,
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      '@arti/': 'app/'
    },
    // map tells the System loader where to look for things
    map: {
      // angular bundles

      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      "jquery": "npm:jquery",
      "bootstrap": "npm:bootstrap",
      "app-module": "app/app.module.js"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'app': {
        "defaultExtension": "js"
      },
      'rxjs': {
        defaultExtension: 'js'
      },
      'jquery': {
        "main": "dist/jquery.min.js",
        "defaultExtension": 'js'
      },
      'bootstrap': {
        "main": "dist/js/bootstrap.min.js",
        "defaultExtension": 'js'
      }
    }
  });
})(this);