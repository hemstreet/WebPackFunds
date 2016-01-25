//require('./login');
import {login} from "./login";

login('admin', 'idunno');

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack.png');

document.getElementById('img_container').appendChild(img);

console.log('App Loaded');

require('../css/bootstrap.css');
require('../css/app.scss');
require('../css/appLess.less');