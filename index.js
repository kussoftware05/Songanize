/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Add this line to your `index.js`
import 'react-native-get-random-values'

AppRegistry.registerComponent(appName, () => App);
