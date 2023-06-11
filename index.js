/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import calculadora from './src/calculadora';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => calculadora);
