import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, Section, Text, BackButton} from '../../Components';
import BottomPanel from '../../Components/Panel';
import useTranslation from '../../i18n';
import {ScrollView} from 'react-native-gesture-handler';
import SettingItem from '../../Components/SettingItem';
import settingItemList from './settingItemList';

const SettingScreen = ({navigation}) => {
  const panelRef = useRef();
  const {t} = useTranslation();

  return (
    <LoadingActionContainer fixed>
      <Container>
        <Section>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <BackButton />
            <Text style={{fontSize: 20, marginLeft: 20}} text={t('settings')} />
          </View>
        </Section>
        <ScrollView>
          <Section>
            {settingItemList.map(item => {
              return (
                <SettingItem
                  key={item.label}
                  iconType={item.iconType}
                  label={item.label}
                  icon={item.icon}
                  type={item.type}
                  action={item.action}
                  ref={panelRef}
                />
              );
            })}
          </Section>
        </ScrollView>
      </Container>
      <BottomPanel ref={panelRef} />
    </LoadingActionContainer>
  );
};

export default SettingScreen;
