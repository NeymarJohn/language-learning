import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import Setting from '../../Screens/Setting';
import Account from '../../Screens/Account';
import {IconX, ICON_TYPE} from '../../Icons';
import {createStackNavigator} from '@react-navigation/stack';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import Task from '../../Screens/Task';
import FlashCard from '../../Screens/FlashCard';

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('home'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle},
          ],
          headerShown: false,
        }}
        name="homestackscreen"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const AccountStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('account'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle},
          ],
          headerShown: false,
        }}
        name="Accountstackscreen"
        component={Account}
      />
    </Stack.Navigator>
  );
};

const FlashCardStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('flash_card'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle},
          ],
          headerShown: false,
        }}
        name="Flashcardstackscreen"
        component={FlashCard}
      />
    </Stack.Navigator>
  );
};

const TaskStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('task'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle},
          ],
          headerShown: false,
        }}
        name="Taskstackscreen"
        component={Task}
      />
    </Stack.Navigator>
  );
};

const NotificationStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('settings'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle},
            ],
            headerShown: false,
          };
        }}
        name="notificationsstackscreen"
        component={Setting}
      />
    </Stack.Navigator>
  );
};

function getHomeIcon({focused, color}) {
  return <IconX origin={ICON_TYPE.OCTICONS} name={'home'} color={color} />;
}

function getAccountIcon({focused, color}) {
  return (
    <IconX origin={ICON_TYPE.FEATHER_ICONS} name={'users'} color={color} />
  );
}

function getNotificationIcon({focused, color}) {
  return <IconX origin={ICON_TYPE.ANT_ICON} name={'setting'} color={color} />;
}

function getFlashCardIcon({focused, color}) {
  return (
    <IconX
      origin={ICON_TYPE.MATERIAL_COMMUNITY}
      name={'card-multiple-outline'}
      color={color}
    />
  );
}

function getTaskIcon({focused, color}) {
  return (
    <IconX origin={ICON_TYPE.FONT_AWESOME5} name={'tasks'} color={color} />
  );
}

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      backBehavior={'initialRoute'}
      inactiveColor={theme.colors.normalText}
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: theme.colors.background}}
      shifting={false}
      labeled={true}>
      <Tab.Screen
        options={{
          tabBarIcon: getHomeIcon,
          title: t('home'),
        }}
        name={Routes.HOME_SCREEN}
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTaskIcon,
          title: 'Task',
        }}
        name={Routes.TASK_SCREEN}
        component={TaskStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getFlashCardIcon,
          title: t('flash_card'),
        }}
        name={Routes.FLASH_CARD}
        component={FlashCardStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getAccountIcon,
          title: t('account'),
        }}
        name={Routes.Account_SCREEN}
        component={AccountStackScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'bottomtabs'} component={BottomTabs} />
    </Stack.Navigator>
  );
};
