import React, {useRef, useState} from 'react';
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
import OTPInput from '../../../Components/OTPInput';

export default () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();
  const navigation = useNavigation();

  const panelRef = useRef();

  const {status} = useStoreState(state => ({
    status: state.login.status,
  }));

  const goNext = () => {
    navigation.navigate(Routes.RESET_PASSWORD);
  };

  const loading = status === STATUS.FETCHING;

  return (
    <Container>
      <LoadingActionContainer>
        <Section>
          <BackButton style={{marginTop: 10}} />
        </Section>
        <Section>
          <TextComponent style={{fontSize: 20}} text={t('you_got_mail')} />
          <TextComponent
            style={{fontSize: 15, marginTop: 30}}
            text={t('otp_intro')}
          />
        </Section>
        <Section>
          <OTPInput length={4} />
        </Section>
        <Section>
          <TextComponent
            style={{fontSize: 15, marginTop: 30, textAlign: 'center'}}
            text={t('not_receive_email')}
          />
          <TextComponent
            style={{fontSize: 15, marginTop: 30, textAlign: 'center'}}
            text={t('resend_code')}
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
