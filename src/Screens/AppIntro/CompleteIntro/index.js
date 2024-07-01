import React from 'react';
import {View, Image} from 'react-native';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {Container, ButtonX, Text} from '../../../Components';
import useAppTheme from '../../../Themes/Context';
import Routes from '../../../Navigation/Routes';

import useTranslation from '../../../i18n';
import NavigationService from '../../../Navigation/index';

const CompleteIntro = () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const goToSignUp = () => {
    NavigationService.navigate(Routes.SINGUP_SCREEN);
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
              text={t('awesome')}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../../Assets/image/complete_logo.png')}
                width={100}
                height={100}
              />
            </View>
            <Text
              style={{
                paddingTop: 20,
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('complete_intro1')}
            />
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('complete_intro2')}
            />
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('complete_intro3')}
            />
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <ButtonX
              dark={true}
              color={theme.colors.primary}
              onPress={goToSignUp}
              label={t('create_profile')}
            />
            <ButtonX
              style={{backgroundColor: theme.colors.accent}}
              onPress={goToLogin}
              labelColor={theme.colors.primary}
              label={t('skip')}
            />
          </View>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

export default CompleteIntro;
