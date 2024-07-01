/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src';
import {moduleName as appName} from './app.json';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs([
//   'Require cycle:',
//   'Remote debugger',
//   'Accessing view manager configs',
//   'Warning: componentWillReceiveProps',
//   'Warning: componentWillMount',
// ]);

AppRegistry.registerComponent(appName, () => App);
