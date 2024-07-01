import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import useAppTheme from '../Themes/Context';

const OTPInput = ({length}) => {
  const {theme} = useAppTheme();
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChangeText = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={[styles.input, {color: theme.colors.normalText}]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={value => handleChangeText(index, value)}
          value={digit}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 40,
    height: 40,
    margin: 5,
    textAlign: 'center',
  },
});

export default OTPInput;
