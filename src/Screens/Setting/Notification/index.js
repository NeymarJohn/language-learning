import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {Container, Section, Text, BackButton} from '../../../Components';
import useTranslation from '../../../i18n';
import {ScrollView} from 'react-native-gesture-handler';
import NotificationItem from '../../../Components/NotificationItem';
import settingItemList from './notificationImteList';

const NotificationScreen = ({navigation}) => {
  const {t, localeProvider, changeLocale} = useTranslation();

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
              text={t('notification')}
            />
          </View>
        </Section>
        <ScrollView>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            {settingItemList.map(item => {
              return (
                <NotificationItem
                  key={item.label}
                  label={item.label}
                  action={item.action}
                />
              );
            })}
          </View>
        </ScrollView>
      </LoadingActionContainer>
    </Container>
  );
};

export default NotificationScreen;
