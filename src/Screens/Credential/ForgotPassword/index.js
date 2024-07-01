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
  InputX,
  ButtonX,
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
          <TextComponent style={{fontSize: 20}} text={t('forgot_password')} />
          <TextComponent
            style={{fontSize: 15, marginTop: 30}}
            text={t('forgot_intro')}
          />
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
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            color={loading ? theme.colors.accent : theme.colors.primary}
            onPress={goNext}
            label={t('continue')}
          />
        </Section>
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
