import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {ButtonX, Text, BackButton, Section} from '../../../Components';
import useAppTheme from '../../../Themes/Context';
import Routes from '../../../Navigation/Routes';
import {LOCALES} from '../../../Constants/index';

import useTranslation from '../../../i18n';
import NavigationService from '../../../Navigation/index';
import {useNavigation} from '@react-navigation/native';
import languageList from './languageList';
import {Images} from '../../../Config/ImageLIst';
import DropDownPicker from 'react-native-dropdown-picker';

const LanguageSet = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const [nativeOpen, setNativeOpen] = useState(false);
  const [nativeValue, setNativeValue] = useState(null);
  const [nativeItems, setNativeItems] = useState([]);

  const {theme} = useAppTheme();
  const {t, changeLocale, localeProvider} = useTranslation();
  const [active, setActive] = useState('');

  useEffect(() => {
    let languageArray = [];
    let nativeArray = [];
    languageList.map(language => {
      const obj = {
        label: language.language,
        value: language.flag,
        icon: () => (
          <Image
            source={Images[language.flag]}
            style={{width: 50, height: 30}}
          />
        ),
      };
      languageArray.push(obj);
    });

    Object.keys(LOCALES).map(item => {
      const languageObj = {
        label: LOCALES[item].label,
        value: LOCALES[item].id,
        icon: () => (
          <Image
            source={Images[LOCALES[item].name]}
            style={{width: 50, height: 30}}
          />
        ),
      };
      nativeArray.push(languageObj);
    });

    setItems(languageArray);
    setNativeItems(nativeArray);
  }, []);

  useEffect(() => {
    changeLocale(
      nativeValue == LOCALES.SPANISH.id ? LOCALES.SPANISH : LOCALES.ENGLISH,
    );
  }, [nativeValue]);

  const goNext = () => {
    NavigationService.navigate(Routes.WHY_STUDY);
  };

  const _changeLocale = () => {
    changeLocale(
      localeProvider.id == LOCALES.SPANISH.id
        ? LOCALES.ENGLISH
        : LOCALES.SPANISH,
    );
  };

  const selectLanguage = language => {
    setActive(language);
  };

  return (
    <LoadingActionContainer fixed>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          padding: 20,
          marginTop: 15,
        }}>
        <BackButton style={{flex: 1}} />
        <View style={{flex: 5}}>
          <ProgressBar
            progress={0.3}
            color={theme.colors.primary}
            style={{height: 5, borderRadius: 3, marginRight: 80}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Image
              source={require('../../../Assets/image/intro_logo.png')}
              style={{width: 100, height: 100}}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 15}} text={t('language_setting_quiz1')} />
          <Text style={{fontSize: 15}} text={t('language_setting_quiz2')} />
        </View>
      </View>
      <Section>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          zIndex={2}
          maxHeight={300}
          autoScroll={true}
          placeholder={t('choose_learn_language')}
          dropDownContainerStyle={{
            height: 500,
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent,
          }}
          textStyle={{color: theme.colors.normalText}}
          style={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent,
          }}
          // containerStyle={{backgroundColor: theme.colors.background}}
          searchable={true}
          searchContainerStyle={{borderColor: theme.colors.accent}}
          searchTextInputStyle={{
            borderColor: theme.colors.accent,
            color: theme.colors.normalText,
          }}
        />
      </Section>
      <Section>
        <Text text={t('native_language')} />
        <DropDownPicker
          open={nativeOpen}
          value={nativeValue}
          items={nativeItems}
          zIndex={1}
          setOpen={setNativeOpen}
          setValue={setNativeValue}
          setItems={setNativeItems}
          autoScroll={true}
          placeholder={t('choose_native_language')}
          dropDownContainerStyle={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent,
          }}
          textStyle={{color: theme.colors.normalText}}
          style={{
            marginTop: 10,
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent,
          }}
          // containerStyle={{backgroundColor: theme.colors.background}}
          searchable={true}
          searchContainerStyle={{borderColor: theme.colors.accent}}
          searchTextInputStyle={{
            borderColor: theme.colors.accent,
            color: theme.colors.normalText,
          }}
        />
      </Section>

      <ButtonX
        dark={true}
        color={theme.colors.primaryText}
        onPress={goNext}
        label={t('continue')}
        style={{margin: 20}}
      />
    </LoadingActionContainer>
  );
};

export default LanguageSet;
