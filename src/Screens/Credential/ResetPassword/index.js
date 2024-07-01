import React, {useRef} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import useAppTheme from '../../../Themes/Context';
import useTranslation from '../../../i18n';
import {useNavigation} from '@react-navigation/native';

import {STATUS} from '../../../Constants';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  ButtonX,
  PasswordInputX,
  BackButton,
} from '../../../Components';
import BottomPanel from '../../../Components/Panel';
import TextComponent from '../../../Components/Text';
import Routes from '../../../Navigation/Routes';

export default () => {
  const onChange = useStoreActions(actions => actions.login.onLoginInputChange);
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const panelRef = useRef();

  const onSubmit = () => {
    inputPassword.current.focus();
  };

  const {username, password, status} = useStoreState(state => ({
    username: state.login.username,
    password: state.login.password,
    status: state.login.status,
  }));

  const goNext = () => {
    navigation.navigate(Routes.OTP_SCREEN);
  };

  const loading = status === STATUS.FETCHING;

  return (
    <Container>
      <LoadingActionContainer>
        <Section>
          <BackButton style={{marginTop: 10}} />
        </Section>
        <Section>
          <TextComponent
            style={{fontSize: 20}}
            text={t('create_new_password')}
          />
          <TextComponent
            style={{fontSize: 15, marginTop: 30}}
            text={t('reset_password_intro')}
          />
        </Section>
        <Section>
          <PasswordInputX
            label={t('input_create_new_password')}
            // mode="outlined"
            ref={inputPassword}
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
            label={t('confirm_create_new_password')}
            // mode="outlined"
            ref={inputConfirmPassword}
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
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            color={loading ? theme.colors.accent : theme.colors.primary}
            onPress={goNext}
            label={t('reset')}
          />
        </Section>
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
