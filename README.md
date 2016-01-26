# Webpack Fundamentals Course
This is off of Joe Eames Pluralsight Course Webpack Fundamentals up to loading images.
## Things to Install for project
* npm install webpack -g
* npm install webpack-dev-server -g
* npm install http-server -g
    * installs a node server
    * by using ‘http-server’ it will create a server at current directory
## Useful Webpack Commands
* webpack -p
    * minimizes code
* webpack --config webpack-production.config.js
    * can specify which config file to use
* webpack-dev-server
    * runs the webpack dev server locally
    * terminal outputs url http://screencast.com/t/yEj1JJzlgO
* webpack-dev-server --inline
    * runs auto reloading without status bar
    * must go to just the base url (localhost:8080)
* webpack -d or webpack-dev-server -d
    * generates source maps for javascript files
    * used when debugging in browser
