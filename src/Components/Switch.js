import {Pressable, View, Animated, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import useAppTheme from '../Themes/Context';

const Switch = props => {
  const {value, onValueChange} = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));
  const {theme, toggleTheme} = useAppTheme();
  const defaultStyles = {
    bgGradientColors: ['#bfc1bf', '#bfc1bf'],
    headGradientColors: ['#ffffff', '#E1E4E8'],
  };

  const activeStyles = {
    bgGradientColors: [theme.colors.primary, theme.colors.primary],
    headGradientColors: ['#ffffff', '#E1E4E8'],
  };

  useEffect(() => {
    // Update the animated value when the value prop changes
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300, // Adjust the animation duration
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 18], // Adjust the distance of the switch head
  });

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);
  };

  const currentStyles = value ? activeStyles : defaultStyles;

  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 0.5,
        }}>
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{translateX}],
            }}>
            <LinearGradient
              colors={currentStyles.headGradientColors}
              style={styles.headGradient}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 40,
    height: 25,
    borderRadius: 16,
  },
  backgroundGradient: {
    borderRadius: 16,
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  headGradient: {
    width: 18,
    height: 18,
    borderRadius: 100,
  },
});

export default Switch;
