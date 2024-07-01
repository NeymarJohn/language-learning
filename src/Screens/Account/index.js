import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';

import {ButtonX, Container, Section, Text} from '../../Components';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import NavigationStyles from '../../Styles/NavigationStyles';
import {ScrollView} from 'react-native-gesture-handler';
import Statistics from './statistics';
import Chart from './chart';
import {ICON_TYPE, IconX} from '../../Icons';
import Routes from '../../Navigation/Routes';

const MainScreen = ({navigation}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  return (
    <LoadingActionContainer fixed>
      <Container>
        <Section>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}} text={t('account')} />
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.SETTING_SCREEN)}>
              <IconX
                style={{fontSize: 20}}
                origin={ICON_TYPE.ANT_ICON}
                name="setting"
                color={theme.colors.normalText}
              />
            </TouchableOpacity>
          </View>
        </Section>
        <ScrollView>
          <Section>
            <View
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={require('../../Assets/image/user_profile.png')}
              />
              <Text
                style={{fontSize: 20, fontWeight: 'bold'}}
                text="Andrew Ainsley"
              />
              <Text style={{fontSize: 12}} text="Joined since 20 Jan 2023" />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                borderTopWidth: 0.5,
                borderTopColor: theme.colors.border,
                padding: 15,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}} text={1536} />
                <Text style={{fontSize: 15}} text={t('followers')} />
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: theme.colors.border,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}} text={195} />
                <Text style={{fontSize: 15}} text={t('followings')} />
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: theme.colors.border,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}} text={1536} />
                <Text style={{fontSize: 15}} text={t('life_xp')} />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <ButtonX
                dark={true}
                color={theme.colors.primary}
                // onPress={loginUser}
                label={t('edit_profile')}
                style={{flex: 1}}
                icon={'edit'}
              />
              <ButtonX
                mode={'text'}
                style={{
                  flex: 1,
                  backgroundColor: theme.colors.accent,
                  borderWidth: 1,
                  borderColor: theme.colors.primary,
                }}
                // onPress={() => navigation.navigate(Routes.FORGOT_SCREEN)}
                label={t('message')}
                icon={'message1'}
              />
            </View>
          </Section>
          <Section>
            <Text
              style={{fontSize: 18, fontWeight: 'bold'}}
              text={t('your_statistics')}
            />
            <Statistics />
          </Section>
          <Section>
            <Chart />
          </Section>
        </ScrollView>
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'Profile',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;
