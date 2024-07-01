import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '../../Components';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';

const Statistics = () => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: 10,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/fire.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="127" />
            <Text style={{fontSize: 12}} text={t('your_challenge')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/calendar.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="458" />
            <Text style={{fontSize: 12}} text={t('lesson_passed')} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: 10,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/diamond.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="957" />
            <Text style={{fontSize: 12}} text={t('total_diamonds')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/xp.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="15274" />
            <Text style={{fontSize: 12}} text={t('total_life_xp')} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: 10,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/target.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="289" />
            <Text style={{fontSize: 12}} text={t('correct_practices')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            gap: 10,
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 20,
            flex: 1,
          }}>
          <Image
            source={require('../../Assets/image/account/reward.png')}
            style={{width: 30, height: 30}}
          />
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} text="36" />
            <Text style={{fontSize: 12}} text={t('top_position')} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Statistics;
