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
import {ButtonX, Container, Text, Section} from '../../Components';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import useAppTheme from '../../Themes/Context';
import {ICON_TYPE, IconX} from '../../Icons';
import useTranslation from '../../i18n';
import {Images} from '../../Config/ImageLIst';

const screenWidth = Dimensions.get('window').width;

const FlashCard = () => {
  const scrollViewRef = useRef();
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const [contentOffsetX, setContentOffsetX] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

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
      title: 'Hands-on experience',
      problem: 'Practice skills you get from doing a job',
      answer: 'This is true Answer',
    },
    {
      img: 'intro_logo',
      title: 'Responsibilities',
      problem: 'The things you must to do as part of your job',
      answer: 'This is true Answer',
    },
    {
      img: 'complete_logo',
      title: 'Complete',
      problem: 'Having all the necessary or appropriate parts.',
      answer: 'This is true Answer',
    },
  ];

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
            <Text style={{fontSize: 20}} text={t('flash_card')} />
          </View>
        </Section>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}>
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
        </ScrollView>
      </Container>
    </LoadingActionContainer>
  );
};

const FlashCardItem = ({item, scrollToPrevious, scrollToNext}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer);
    Animated.timing(rotationValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = rotationValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = rotationValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  return (
    <TouchableOpacity onPress={flipCard} style={styles.container}>
      <Animated.View style={[styles.cardContainer, frontAnimatedStyle]}>
        <View style={[styles.card]}>
          <Image source={Images[item.img]} style={{width: 200, height: 250}} />
          <Text text={item.title} style={{fontSize: 20, fontWeight: 'bold'}} />
          <Text text={item.problem} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.cardContainer,
          styles.backCardContainer,
          backAnimatedStyle,
        ]}>
        <View style={[styles.card]}>
          <Image source={Images[item.img]} style={{width: 200, height: 250}} />
          <Text text={item.title} style={{fontSize: 20, fontWeight: 'bold'}} />
          <Text text={item.answer} />
        </View>
        <View style={styles.buttonContainer}>
          {showAnswer && (
            <>
              <ButtonX
                dark={true}
                color={theme.colors.primary}
                label={t('yes')}
                style={styles.button}
              />
              <ButtonX
                dark={true}
                color={theme.colors.primary}
                label={t('no')}
                style={styles.button}
              />
              <ButtonX
                dark={true}
                color={theme.colors.primary}
                label={t('not_sure')}
                style={styles.button}
              />
            </>
          )}
        </View>
      </Animated.View>
      <View style={styles.startButtonContainer}>
        <StarButton img={item.img} />
      </View>
      <View style={styles.navigationButtonsContainer}>
        <TouchableOpacity onPress={scrollToPrevious}>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name="arrow-with-circle-left"
            color={theme.colors.normalText}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToNext}>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name="arrow-with-circle-right"
            color={theme.colors.normalText}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
  },
  backCardContainer: {
    transform: [{rotateY: '180deg'}],
  },
  startButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
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
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: screenWidth,
    bottom: 80,
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    bottom: -35,
    position: 'absolute',
    gap: 3,
  },
  button: {
    flex: 1,
  },
});

export default FlashCard;
