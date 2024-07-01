import React from 'react';
import {View, Image} from 'react-native';
import useAppTheme from '../../../Themes/Context';
import useTranslation from '../../../i18n';
import {useStoreActions} from 'easy-peasy';

import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {APP_STATE} from '../../../Constants';
import {Container, ButtonX, Text} from '../../../Components';
import Fonts from '../../../Themes/Fonts';

const CongratulationRegister = () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const setState = useStoreActions(actions => actions.login.changeAppState);

  const goToHome = () => {
    setState(APP_STATE.PRIVATE);
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
              text={t('hurray')}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../../Assets/image/congrat_logo.png')}
                width={80}
                height={80}
              />
            </View>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.primary,
                fontFamily: Fonts.type.stylish,
                fontWeight: 'bold',
              }}
              text={t('register_complete')}
            />
            <Text
              style={{
                paddingTop: 20,
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('register_intro1')}
            />
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
              }}
              text={t('register_intro2')}
            />
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <ButtonX
              dark={true}
              color={theme.colors.primary}
              onPress={goToHome}
              label={t('continue_to_home')}
            />
          </View>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

export default CongratulationRegister;
