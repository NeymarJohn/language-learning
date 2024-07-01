import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {Container, ButtonX, Text, BackButton} from '../../../Components';
import useAppTheme from '../../../Themes/Context';
import Routes from '../../../Navigation/Routes';

import useTranslation from '../../../i18n';
import NavigationService from '../../../Navigation/index';
import {useNavigation} from '@react-navigation/native';
import reasonList from './reasonList';
import {Images} from '../../../Config/ImageLIst';

const WhyStudy = () => {
  const navigation = useNavigation();
  const {theme} = useAppTheme();
  const {t, changeLocale, localeProvider} = useTranslation();
  const [active, setActive] = useState('');

  const goNext = () => {
    NavigationService.navigate(Routes.SELECT_LEVEL);
  };

  const selectReason = language => {
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
            progress={0.6}
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
          <Text style={{fontSize: 15}} text={t('reason_quiz1')} />
          <Text style={{fontSize: 15}} text={t('reason_quiz2')} />
        </View>
      </View>
      <ScrollView>
        <Container
          style={{
            justifyContent: 'center',
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              flex: 1,
            }}>
            {reasonList.map(item => {
              return (
                <TouchableOpacity
                  key={item.img}
                  onPress={() => selectReason(item.reason)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 10,
                      borderColor:
                        active == item.reason
                          ? theme.colors.primary
                          : theme.colors.accent,
                      borderWidth: active == item.reason ? 4 : 1,
                      margin: 3,
                    }}>
                    <Image
                      source={Images[item.img]}
                      style={{width: 40, height: 40}}
                    />
                    <Text
                      style={{fontSize: 17, marginLeft: 10}}
                      text={t(item.reason)}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </Container>
      </ScrollView>
      <ButtonX
        dark={true}
        color={theme.colors.primary}
        onPress={goNext}
        label={t('continue')}
        style={{margin: 20}}
      />
    </LoadingActionContainer>
  );
};

export default WhyStudy;
