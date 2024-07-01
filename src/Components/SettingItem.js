import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ICON_TYPE, IconX} from '../Icons';

import useTranslation from '../i18n';
import TextComponent from './Text';
import useAppTheme from '../Themes/Context';
import {LOCALES} from '../Constants';

const SettingItem = React.forwardRef((props, ref) => {
  const {iconType, label, icon, type, action} = props;
  const {t, localeProvider, changeLocale} = useTranslation();
  const nativation = useNavigation();
  const {theme, toggleTheme} = useAppTheme();

  const _changeLocale = useCallback(() => {
    changeLocale(
      localeProvider.id == LOCALES.SPANISH.id
        ? LOCALES.ENGLISH
        : LOCALES.SPANISH,
    );
  }, [changeLocale, localeProvider.id]);

  const _changeTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const handleItemAction = () => {
    if (type === 'navigation') {
      nativation.navigate(action);
    } else {
      switch (icon) {
        case 'light-up':
          return _changeTheme();
        case 'log-out':
          return ref.current.show();
        case 'language':
          return _changeLocale();
      }
    }
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <IconX origin={iconType} name={icon} color={theme.colors.primary} />
          <TextComponent
            style={{marginLeft: 20, fontSize: 16}}
            text={t(label)}
          />
        </View>
        {type === 'navigation' ? (
          <IconX origin={ICON_TYPE.ANT_ICON} name={'right'} />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
});

export default SettingItem;
