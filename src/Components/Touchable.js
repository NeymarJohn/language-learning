import React from 'react';
import {InteractionManager, TouchableOpacity} from 'react-native';
import {isAndroid} from '../Constants';
import useAppTheme from '../Themes/Context';

export default React.memo(
  ({onPress, foreground = true, background, ...other}) => {
    const _onPress = () => {
      InteractionManager.runAfterInteractions(() => {
        onPress && onPress();
      });
    };

    return isAndroid ? (
      <TouchableOpacity
        useForeground={foreground}
        // background={ other.color || theme.colors.accent, other.border ? false : true, }
        onPress={_onPress}
        {...other}
      />
    ) : (
      <TouchableOpacity onPress={_onPress} {...other} />
    );
  },
);
