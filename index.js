/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PanDemo from './components/PanDemo';
import PressDemo from './components/PressDemo'

AppRegistry.registerComponent(appName, () => PanDemo);
