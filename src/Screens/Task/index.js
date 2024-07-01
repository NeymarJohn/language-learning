import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ButtonX, Container, Section, Text} from '../../Components';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useTranslation from '../../i18n';
import useAppTheme from '../../Themes/Context';
import {ICON_TYPE, IconX} from '../../Icons';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../Navigation/Routes';

const Task = () => {
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
            <Text style={{fontSize: 20}} text={t('task')} />
          </View>
        </Section>
        <Section>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              gap: 20,
            }}>
            <IconButton
              origin={ICON_TYPE.ENTYPO}
              icon={'open-book'}
              text="Vocabulary"
            />
            <IconButton
              origin={ICON_TYPE.ENTYPO}
              icon={'modern-mic'}
              text="Reading"
            />
            <IconButton
              origin={ICON_TYPE.FONT_AWESOME}
              icon={'assistive-listening-systems'}
              text="Listening"
            />
            <IconButton
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              icon={'speaker-wireless'}
              text="Speaking"
            />
          </View>
        </Section>
      </Container>
    </LoadingActionContainer>
  );
};

const IconButton = props => {
  const {origin, icon, text} = props;
  const {theme} = useAppTheme();
  const navigation = useNavigation();
  const handleItemClick = () => {
    switch (icon) {
      case 'open-book':
        return navigation.navigate(Routes.TASK_VOCABULARY);
      case 'modern-mic':
        return navigation.navigate(Routes.TASK_READING);
      case 'assistive-listening-systems':
        return navigation.navigate(Routes.TASK_LISTENING);
      case 'speaker-wireless':
        return navigation.navigate(Routes.TASK_SPEAKING);
    }
  };

  return (
    <TouchableOpacity onPress={handleItemClick}>
      <View
        style={{
          padding: 20,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: theme.colors.primary,
        }}>
        <IconX
          origin={origin}
          name={icon}
          style={{fontSize: 18, color: '#fff'}}
        />
        <Text
          style={{fontSize: 18, color: '#fff', marginLeft: 10}}
          text={text}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Task;
