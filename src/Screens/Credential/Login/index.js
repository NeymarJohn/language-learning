import React, {useRef} from 'react';
import {Text, Keyboard, TouchableOpacity, Image} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';

import {STATUS} from '../../../Constants';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  PasswordInputX,
  InputX,
  ButtonX,
  BackButton,
} from '../../../Components';

import useAppTheme from '../../../Themes/Context';
import useAuth from '../../../Services/Auth';
import {showInfoToast} from '../../../Lib/Toast';
import BottomPanel from '../../../Components/Panel';
import useTranslation from '../../../i18n';
import Fonts from '../../../Themes/Fonts';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../../Navigation/Routes';

export default () => {
  const onChange = useStoreActions(actions => actions.login.onLoginInputChange);
  const {t} = useTranslation();
  const {login} = useAuth();
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  const inputUserName = useRef();
  const inputPassword = useRef();

  const panelRef = useRef();

  const onSubmit = () => {
    inputPassword.current.focus();
  };

  const {username, password, status} = useStoreState(state => ({
    username: state.login.username,
    password: state.login.password,
    status: state.login.status,
  }));

  const loginUser = () => {
    Keyboard.dismiss();

    if (!username || !password) {
      showInfoToast('Username and password are mandatory, try again !');
    }

    login({
      username,
      password,
    });
  };

  const loading = status === STATUS.FETCHING;

  return (
    <Container>
      <LoadingActionContainer>
        <Section>
          <BackButton style={{marginTop: 10}} />
        </Section>
        <Section>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: theme.colors.primary,
              marginTop: 10,
              fontFamily: Fonts.type.stylish,
              marginBottom: 30,
            }}>
            {t('welcome')}
          </Text>
        </Section>
        <Section>
          <InputX
            label="EMAIL"
            // mode="outlined"
            ref={inputUserName}
            style={{backgroundColor: theme.colors.background}}
            autoCapitalize="none"
            returnKeyType={'next'}
            onSubmitEditing={onSubmit}
            onChangeText={text =>
              onChange({
                key: 'username',
                value: text,
              })
            }
            value={username}
          />
          <PasswordInputX
            ref={inputPassword}
            value={password}
            // mode="outlined"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.normalText,
            }}
            label="PASSWORD"
            returnKeyType={'go'}
            onSubmitEditing={loginUser}
            onChangeText={text =>
              onChange({
                key: 'password',
                value: text,
              })
            }
          />
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            color={loading ? theme.colors.accent : theme.colors.primary}
            onPress={loginUser}
            label={t('login')}
          />

          <ButtonX
            mode={'text'}
            onPress={() => navigation.navigate(Routes.FORGOT_SCREEN)}
            label={t('forgot_password')}
          />
        </Section>
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
