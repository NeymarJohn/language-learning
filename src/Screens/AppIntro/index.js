import React from 'react';
import {View, Image} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, ButtonX, Text} from '../../Components';
import useAppTheme from '../../Themes/Context';
import Fonts from '../../Themes/Fonts';
import Routes from '../../Navigation/Routes';

import useTranslation from '../../i18n';
import NavigationService from '../../Navigation/index';

const AppIntro = () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const getStarted = () => {
    NavigationService.navigate(Routes.LANGUAGE_SET);
  };
  const goToLogin = () => {
    NavigationService.navigate(Routes.LOGIN_SCREEN);
  };

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            flex: 1,
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 30,
                marginTop: 50,
              }}
              text={t('hi')}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../../hero/logo.png')}
                width={100}
                height={100}
              />
            </View>
            <Text
              style={{
                marginTop: 30,
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.primary,
                fontFamily: Fonts.type.stylish,
                fontWeight: 'bold',
              }}
              text={t('welcome')}
            />
            <Text
              style={{
                paddingTop: 20,
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('intro1')}
            />
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('intro2')}
            />
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <ButtonX
              dark={true}
              color={theme.colors.primary}
              onPress={getStarted}
              label={t('get_started')}
            />
            <ButtonX
              style={{backgroundColor: theme.colors.accent}}
              onPress={goToLogin}
              labelColor={theme.colors.primaryText}
              label={t('already_account')}
            />
          </View>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

export default AppIntro;
