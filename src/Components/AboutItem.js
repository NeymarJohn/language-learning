import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ICON_TYPE, IconX} from '../Icons';

import useTranslation from '../i18n';
import TextComponent from './Text';

const AboutItem = React.forwardRef((props, ref) => {
  const {label, action} = props;
  const {t} = useTranslation();
  const nativation = useNavigation();

  const handleItemAction = () => {
    nativation.navigate(action);
  };
  return (
    <TouchableOpacity
      style={{marginTop: 5, paddingTop: 10, paddingBottom: 10}}
      onPress={handleItemAction}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <TextComponent text={t(label)} style={{fontSize: 15}} />
        <IconX origin={ICON_TYPE.ANT_ICON} name={'right'} />
      </View>
    </TouchableOpacity>
  );
});

export default AboutItem;
