import React, {useState, useImperativeHandle, forwardRef} from 'react';

import {ButtonX, Container, Section, Text} from '../Components';
import Modal from 'react-native-modal';
import useAppTheme from '../Themes/Context';
import useTranslation from '../i18n';
import useAuth from '../Services/Auth';

function BottomPanel(props, ref) {
  const [visible, setVisibility] = useState(false);
  const {theme} = useAppTheme();
  const {logout} = useAuth();
  const {t} = useTranslation();
  const _hide = () => {
    setVisibility(false);
  };

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisibility(true);
    },
    hide: () => {
      _hide();
    },
  }));

  return (
    <Modal
      swipeDirection={['down', 'right']}
      hideModalContentWhileAnimating
      isVisible={visible}
      avoidKeyboard={true}
      swipeThreshold={80}
      onSwipeComplete={() => _hide()}
      onBackButtonPress={() => _hide()}
      useNativeDriver={true}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <Container style={[{flex: 0.5}]}>
        <Container
          style={{
            padding: 20,
            backgroundColor: theme.colors.background,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: theme.colors.redText,
              textAlign: 'center',
            }}
            text={t('logout')}
          />
          <Section>
            <Text style={{textAlign: 'center'}} text={t('confirm_logout')} />
          </Section>
          <Section>
            <ButtonX
              dark={true}
              color={theme.colors.primary}
              onPress={logout}
              label={t('logout').toUpperCase()}
            />
            <ButtonX
              style={{backgroundColor: theme.colors.accent}}
              labelColor={theme.colors.primaryText}
              label={t('cancel').toUpperCase()}
              onPress={() => _hide()}
            />
          </Section>
        </Container>
      </Container>
    </Modal>
  );
}

BottomPanel = forwardRef(BottomPanel);

export default BottomPanel;
