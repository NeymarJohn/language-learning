import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTabStack from './BottomStack';
import Routes from '../Routes';
import PersonalInfo from '../../Screens/Setting/PersonalInfo';
import Notification from '../../Screens/Setting/Notification';
import AboutScreen from '../../Screens/Setting/About';
import SettingScreen from '../../Screens/Setting';
import TaskReading from '../../Screens/Task/Reading';
import TaskVocabulary from '../../Screens/Task/Vocabulary';
import TaskListening from '../../Screens/Task/Listening';
import TaskSpeaking from '../../Screens/Task/Speaking';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.HOME_TABS}
        options={{headerShown: false}}
        component={BottomTabStack}
      />
      <Stack.Screen name={Routes.TASK_READING} component={TaskReading} />
      <Stack.Screen name={Routes.TASK_VOCABULARY} component={TaskVocabulary} />
      <Stack.Screen name={Routes.TASK_LISTENING} component={TaskListening} />
      <Stack.Screen name={Routes.TASK_SPEAKING} component={TaskSpeaking} />

      <Stack.Screen name={Routes.PERSONAL_INFO} component={PersonalInfo} />
      <Stack.Screen
        name={Routes.NOTIFICATION_SCREEN}
        component={Notification}
      />
      <Stack.Screen name={Routes.SETTING_SCREEN} component={SettingScreen} />
      <Stack.Screen name={Routes.ABOUT_SCREEN} component={AboutScreen} />
    </Stack.Navigator>
  );
};
