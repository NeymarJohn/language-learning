/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Text, Keyboard, TouchableOpacity, Image} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../../../Services/Auth/AppContext';

import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  PasswordInputX,
  InputX,
  ButtonX,
  BackButton,
} from '../../../Components';
import {STATUS} from '../../../Constants';

import useAppTheme from '../../../Themes/Context';
import useAuth from '../../../Services/Auth';
import BottomPanel from '../../../Components/Panel';
import useTranslation from '../../../i18n';
import Fonts from '../../../Themes/Fonts';
import Routes from '../../../Navigation/Routes';

export default () => {
  const [email, setEmail] = useState('');

  const onChange = useStoreActions(actions => actions.login.onLoginInputChange);
  const {t} = useTranslation();
  const {login} = useAuth();
  const {theme} = useAppTheme();
  const navigation = useNavigation();
  const inputUserEmail = useRef();
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

  const signUp = () => {
    navigation.navigate(Routes.CONGRATULATIONS_SCREEN);
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
              marginTop: 30,
              fontFamily: Fonts.type.stylish,
              marginBottom: 40,
            }}>
            {t('welcome')}
          </Text>
        </Section>
        <Section>
          <InputX
            label="USER NAME"
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
          <InputX
            label="EMAIL"
            // mode="outlined"
            ref={inputUserEmail}
            style={{backgroundColor: theme.colors.background}}
            autoCapitalize="none"
            returnKeyType={'next'}
            onSubmitEditing={onSubmit}
            onChangeText={text =>
              onChange({
                key: 'email',
                value: text,
              })
            }
            value={email}
          />
          <PasswordInputX
            ref={inputPassword}
            value={password}
            // mode="outlined"
            style={{backgroundColor: theme.colors.background}}
            label="PASSWORD"
            returnKeyType={'go'}
            onSubmitEditing={signUp}
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
            color={loading ? theme.colors.accent : theme.colors.primaryText}
            onPress={signUp}
            label={t('signup')}
          />
        </Section>
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
