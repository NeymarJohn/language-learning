import React from 'react';
import useAppTheme from '../Themes/Context';
import {Text} from 'react-native';

const TextComponent = ({style, text}) => {
  const {theme} = useAppTheme();
  return <Text style={[{color: theme.colors.normalText}, style]}>{text}</Text>;
};

export default TextComponent;
