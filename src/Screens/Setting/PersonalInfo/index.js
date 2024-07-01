/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Image, View, Keyboard} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../../../Services/Auth/AppContext';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {
  Section,
  Container,
  InputX,
  ButtonX,
  BackButton,
  Text,
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
  const [selected, setSelected] = React.useState('+1');
  const [country, setCountry] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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

  const handleOpenDatePicker = () => {
    Keyboard.dismiss();
    setOpen(true);
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <BackButton />
            <Text
              style={{fontSize: 20, marginLeft: 20}}
              text={t('personal_info')}
            />
          </View>
        </Section>
        <Section>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
              source={require('../../../Assets/image/user_profile.png')}
            />
          </View>
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
          <InputX
            label="Birthday"
            // mode="outlined"
            ref={inputUserEmail}
            style={{backgroundColor: theme.colors.background, marginBottom: 10}}
            avoidKeyboard={true}
            autoCapitalize="none"
            returnKeyType={'next'}
            onFocus={handleOpenDatePicker}
            value={date.toISOString()}
          />
          <CountryCodeDropdownPicker
            selected={selected}
            setSelected={setSelected}
            setCountryDetails={setCountry}
            phone={phone}
            setPhone={setPhone}
            countryCodeTextStyles={{
              fontSize: 15,
              color: theme.colors.normalText,
            }}
            countryCodeContainerStyles={{
              borderWidth: 0,
              borderBottomWidth: 1,
              backgroundColor: theme.colors.background,
            }}
            phoneStyles={{borderWidth: 0, borderBottomWidth: 1, fontSize: 15}}
            searchStyles={{padding: 5}}
            searchTextStyles={{fontSize: 15}}
          />
        </Section>
        <Section>
          <ButtonX
            loading={loading}
            dark={true}
            color={loading ? theme.colors.accent : theme.colors.primaryText}
            onPress={signUp}
            label={t('update')}
          />
        </Section>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </LoadingActionContainer>

      <BottomPanel ref={panelRef} />
    </Container>
  );
};
