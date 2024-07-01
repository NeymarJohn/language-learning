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
import {Container, Text, InputX, BackButton} from '../../../Components';
import LoadingActionContainer from '../../../Components/LoadingActionContainer';
import useAppTheme from '../../../Themes/Context';
import {ICON_TYPE, IconX} from '../../../Icons';
import useTranslation from '../../../i18n';
import {Images} from '../../../Config/ImageLIst';
import theme from '../../../Themes/configs/default';

const screenWidth = Dimensions.get('window').width;

const TaskVocabulary = () => {
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

  const flashcards = [
    {
      img: 'congrat_logo',
      title: 'This is Elingo',
    },
    {
      img: 'intro_logo',
      title: 'This is Elingo',
    },
    {
      img: 'complete_logo',
      title: 'This is Elingo',
    },
  ];

  const practiceList = [
    {
      type: 'choose',
      question: 'Tree',
      images: ['congrat_logo', 'intro_logo', 'complete_logo', 'en'],
    },
    {
      type: 'fill_blank',
      question: 'Now what are you doing?',
      img: 'congrat_logo',
      blanks: 3,
    },
  ];

  return (
    <LoadingActionContainer fixed>
      <Container>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}>
          {/* {!isPractice &&
            flashcards.map(item => {
              return (
                <FlashCardItem
                  key={item.img}
                  item={item}
                  scrollToNext={scrollToNext}
                  scrollToPrevious={scrollToPrevious}
                />
              );
            })}
          {isPractice &&
            practiceList.map((item, index) => {
              return (
                <PracticeItem
                  key={index}
                  item={item}
                  scrollToNext={scrollToNext}
                  scrollToPrevious={scrollToPrevious}
                />
              );
            })} */}
          {flashcards.map(item => {
            return (
              <FlashCardItem
                key={item.img}
                item={item}
                scrollToNext={scrollToNext}
                scrollToPrevious={scrollToPrevious}
              />
            );
          })}
          {practiceList.map((item, index) => {
            return (
              <PracticeItem
                key={index}
                item={item}
                scrollToNext={scrollToNext}
                scrollToPrevious={scrollToPrevious}
              />
            );
          })}
        </ScrollView>
      </Container>
    </LoadingActionContainer>
  );
};

const FlashCardItem = ({item, scrollToPrevious, scrollToNext}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cardContainer]}>
        <View style={[styles.card]}>
          <Image source={Images[item.img]} style={{width: 200, height: 250}} />
          <View
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 15,
              paddingTop: 15,
              backgroundColor: theme.colors.primary,
            }}>
            <Text text={item.title} style={{fontSize: 15, color: '#fff'}} />
          </View>
          <TouchableOpacity>
            <IconX
              origin={ICON_TYPE.FONT_AWESOME}
              name="microphone"
              color={theme.colors.normalText}
              style={{fontSize: 50}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.startButtonContainer}>
        <StarButton img={item.img} />
      </View>
    </View>
  );
};

const PracticeItem = ({item, scrollToPrevious, scrollToNext}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const texts =
    item.type == 'fill_blank'
      ? Array.from({length: item.blanks}, (_, index) => `Text ${index + 1}`)
      : 0;
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cardContainer]}>
        <View style={[styles.card]}>
          {item.type === 'choose' ? (
            <View style={{flexDirection: 'column', gap: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 20,
                }}>
                <TouchableOpacity style={styles.image}>
                  <Image
                    source={Images[item.images[0]]}
                    style={{width: 100, height: 100}}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.image}>
                  <Image
                    source={Images[item.images[1]]}
                    style={{width: 100, height: 100}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.image}>
                  <Image
                    source={Images[item.images[2]]}
                    style={{width: 100, height: 100}}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.image}>
                  <Image
                    source={Images[item.images[3]]}
                    style={{width: 100, height: 100}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Image
              source={Images[item.img]}
              style={{width: 200, height: 200, borderRadius: 200}}
            />
          )}
          <View
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 15,
              paddingTop: 15,
              backgroundColor: theme.colors.primary,
            }}>
            <Text text={item.question} style={{fontSize: 15, color: '#fff'}} />
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            {texts.length > 0 &&
              texts.map((text, index) => (
                <InputX
                  key={index}
                  style={{backgroundColor: theme.colors.background}}
                />
              ))}
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 15,
                paddingTop: 15,
                backgroundColor: theme.colors.primary,
              }}>
              <Text
                text={'Check the Answer'}
                style={{fontSize: 15, color: '#fff'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
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
    alignItems: 'center',
    padding: 20,
    gap: 10,
    position: 'relative',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
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
  image: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10
  },
});

export default TaskVocabulary;
