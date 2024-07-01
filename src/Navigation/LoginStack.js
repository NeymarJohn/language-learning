import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './Routes';

import Login from '../Screens/Credential/Login';
import AppIntro from '../Screens/AppIntro/index';
import CompleteIntro from '../Screens/AppIntro/CompleteIntro/index';
import LanguageSet from '../Screens/AppIntro/LanguageSet/index';
import WhyStudy from '../Screens/AppIntro/WhyStudy/index';
import SelectLevel from '../Screens/AppIntro/SelectLevel/index';
import Signup from '../Screens/Credential/Signup';
import CongratulationRegister from '../Screens/Credential/CongratulationRegister';
import ForgotPassword from '../Screens/Credential/ForgotPassword';
import OTPCode from '../Screens/Credential/OTPCode';
import ResetPassword from '../Screens/Credential/ResetPassword';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.APP_INTRO}>
      <Stack.Screen name={Routes.APP_INTRO} component={AppIntro} />
      <Stack.Screen name={Routes.LANGUAGE_SET} component={LanguageSet} />
      <Stack.Screen name={Routes.WHY_STUDY} component={WhyStudy} />
      <Stack.Screen name={Routes.SELECT_LEVEL} component={SelectLevel} />
      <Stack.Screen name={Routes.COMPLETE_INTRO} component={CompleteIntro} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={Routes.FORGOT_SCREEN} component={ForgotPassword} />
      <Stack.Screen name={Routes.OTP_SCREEN} component={OTPCode} />
      <Stack.Screen name={Routes.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen name={Routes.SINGUP_SCREEN} component={Signup} />
      <Stack.Screen
        name={Routes.CONGRATULATIONS_SCREEN}
        component={CongratulationRegister}
      />
    </Stack.Navigator>
  );
};
