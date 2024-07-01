import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ICON_TYPE, IconX} from '../Icons';
import useAppTheme from '../Themes/Context';

const BackButton = ({style}) => {
  const {theme} = useAppTheme();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={[
        style,
        {height: 60, justifyContent: 'center', alignContent: 'center'},
      ]}
      onPress={goBack}>
      <IconX
        origin={ICON_TYPE.MATERIAL_ICONS}
        name={'arrow-back'}
        color={theme.colors.normalText}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
