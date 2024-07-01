import React from 'react';
import {View, Image} from 'react-native';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {Container, Section, Text, BackButton} from '../../../Components';
import useTranslation from '../../../i18n';
import {ScrollView} from 'react-native-gesture-handler';
import aboutItemList from './aboutItemList';
import AboutItem from '../../../Components/AboutItem';

const AboutScreen = ({navigation}) => {
  const {t} = useTranslation();

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
            <Text style={{fontSize: 20, marginLeft: 20}} text={t('about')} />
          </View>
        </Section>
        <ScrollView>
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
                }}
                source={require('../../../Assets/image/main_logo.png')}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 5,
              }}
              text={'Elingo v1.0.0'}
            />
          </Section>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            {aboutItemList.map(item => {
              return (
                <AboutItem
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

export default AboutScreen;
