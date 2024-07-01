import React, {useState} from 'react';
import {View} from 'react-native';

import Switch from './Switch';
import useTranslation from '../i18n';
import TextComponent from './Text';

const SettingItem = ({label, action}) => {
  const {t} = useTranslation();
  const [isEnabled, setEnabled] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <TextComponent text={t(label)} />
      </View>
      <Switch value={isEnabled} onValueChange={setEnabled} />
    </View>
  );
};

export default SettingItem;
