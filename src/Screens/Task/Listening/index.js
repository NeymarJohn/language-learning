import React, {useRef, useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Video from 'react-native-video';

import {
  ButtonX,
  Container,
  Text,
  Section,
  InputX,
  BackButton,
} from '../../../Components';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import useAppTheme from '../../../Themes/Context';
import {ICON_TYPE, IconX} from '../../../Icons';
import useTranslation from '../../../i18n';
import {Images} from '../../../Config/ImageLIst';

const screenWidth = Dimensions.get('window').width;

const TaskListening = () => {
  const scrollViewRef = useRef();
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const [contentOffsetX, setContentOffsetX] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPractice, setIsPractice] = useState(true);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: 0, animated: false});
    }
  }, []);

  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: contentOffsetX + screenWidth,
        animated: true,
      });
    }
  };

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: contentOffsetX - screenWidth,
        animated: true,
      });
    }
  };

  const onScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    setContentOffsetX(offsetX);
    setCurrentPage(Math.round(offsetX / screenWidth));
  };

  let videoRef = useRef();

  return (
    <LoadingActionContainer fixed>
      <Container>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}>
          <FlashCardItem />
          <PracticeItem />
        </ScrollView>
      </Container>
    </LoadingActionContainer>
  );
};

const FlashCardItem = ({item, scrollToPrevious, scrollToNext}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  let videoRef = useRef();
  return (
    <View style={styles.container}>
      <Video
        ref={ref => {
          videoRef = ref;
        }}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        onLoad={() => {
          videoRef.current?.seek(0);
          videoRef.current?.play();
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text} text={'This is cartoon'} />
      </View>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.startButtonContainer}>
        <StarButton />
      </View>
    </View>
  );
};

const PracticeItem = ({item, scrollToPrevious, scrollToNext}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  let videoRef = useRef();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          height: Dimensions.get('window').height,
        }}>
        <View style={{width: '100%', padding: 20}}>
          <Video
            ref={ref => {
              videoRef = ref;
            }}
            source={{
              uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={{height: 300}}
            resizeMode="cover"
            repeat={true}
            onLoad={() => {
              videoRef.current?.seek(0);
              videoRef.current?.play();
            }}
          />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text
            style={[styles.text, {justifyContent: 'center'}]}
            text={'What is this?'}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <InputX
            style={{backgroundColor: theme.colors.background, width: 200}}
          />
        </View>
      </View>

      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
    </View>
  );
};

const StarButton = ({img}) => {
  const handlePress = () => {
    console.log('Button pressed with img:', img);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.startButton}>
      <IconX
        origin={ICON_TYPE.ANT_ICON}
        name="star"
        style={styles.startButtonText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
  },
  video: {
    flex: 1,
    width: '100%',
    width: screenWidth,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  startButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 45,
    left: 30,
  },
  startButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#d7bd36',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default TaskListening;
