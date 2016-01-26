Webpack Fundamentals Course
===
This is off of [Joe Eames Pluralsight Course Webpack Fundamentals](https://www.pluralsight.com/courses/webpack-fundamentals) up to loading images.

Setup
===
```
$ npm install
$ webpack-dev-server
```

*Server should be running at*
`http://localhost:8080/webpack-dev-server/`

Useful Webpack Commands
==
* webpack -p
    * minifies code
* webpack --config webpack-production.config.js
    * can specify which config file to use
* webpack-dev-server --inline
    * runs auto reloading without status bar
    * must go to just the base url (localhost:8080)
* webpack -d or webpack-dev-server -d
    * generates source maps for javascript files
    * used when debugging in browser
