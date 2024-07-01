import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import {Player} from '@react-native-community/audio-toolkit';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import {Container, Section} from '../../../Components';
import {ICON_TYPE, IconX} from '../../../Icons';
import useAppTheme from '../../../Themes/Context';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TaskReading = () => {
  const navigation = useNavigation();
  const {theme} = useAppTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTextPress = text => {
    setHighlightedText(text);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setHighlightedText('');
  };

  const handlePlayAudio = () => {
    const url = './test.mp3';
    const player = new Player(url, {
      autoDestroy: false,
    }).prepare(err => {
      if (err) {
        console.log('Failed to load audio', err);
        return;
      }
      player.play(() => {
        setIsPlaying(false);
        setProgress(0);
      });
      setIsPlaying(true);
    });

    player.on('progress', ({currentTime, duration}) => {
      setProgress(currentTime / duration);
    });
  };

  useEffect(() => {
    return () => {
      Player.releaseAll();
    };
  }, []);

  return (
    <LoadingActionContainer fixed>
      <Container>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{position: 'relative'}}>
              <Image
                source={require('../../../Assets/image/background/task_reading.png')}
                style={styles.image}
              />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{position: 'absolute', left: 10, top: 10}}>
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name="closecircle"
                  color={theme.colors.text}
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.text, {color: theme.colors.normalText}]}>
              The term “beta male” is a classification within the male spectrum
              of social dynamics, describing a man who is considered to be
              passive, submissive, or less aggressive compared to the dominant
              “alpha male.” Beta males exhibit a variety of qualities that might
              make them appear weaker or less assertive than their alpha male
              counterparts. However, these characteristics also make them
              approachable, trustworthy, and friendly. While beta males may not
              portray the traditional,{' '}
              <Text
                style={styles.highlight}
                onPress={() => handleTextPress('voluptatem')}>
                {' '}
                voluptatem{' '}
              </Text>
              , strong, and assertive image often associated with alpha males,
              they possess qualities that are well-suited for teamwork and
              friendship. Beta males’ kind and supportive nature can sometimes
              lead others to take advantage of them; however, these traits also
              contribute to building strong, long-lasting relationships. Many
              people appreciate beta males’ kindness, reliability, and
              non-competitive demeanor, enabling them to connect with a wide
              range of individuals in various social settings. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. A beta male is often
              characterized as a man who lacks dominant, assertive traits
              present in an alpha male. Beta males typically adopt more passive,
              supportive, and loyal roles in relationships, work, and social
              situations. They tend to display a friendly, non-judgmental
              demeanor and prioritize harmony over conflict. Men with these
              traits have strong communication skills and build trustworthy
              relationships.
            </Text>
          </ScrollView>
          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={isPlaying ? null : handlePlayAudio}>
              <Text>{isPlaying ? 'Playing' : 'Play Audio'}</Text>
            </TouchableOpacity>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressIndicator,
                  {width: progress * 100 + '%'},
                ]}
              />
            </View>
          </View>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>{highlightedText}</Text>
                <Button title="Close" onPress={handleCloseModal} />
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 16,
    padding: 20,
  },
  highlight: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 10,
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default TaskReading;
