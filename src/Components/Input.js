import React, {useImperativeHandle, forwardRef, useState, useRef} from 'react';

import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {IconX, ICON_TYPE} from '../Icons';
import useAppTheme from '../Themes/Context';

function Input({style, ...other}, ref) {
  const {theme} = useAppTheme();

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return (
    <TextInput
      ref={inputRef}
      theme={{
        colors: {
          background: theme.colors.surface,
        },
      }}
      textColor={theme.colors.normalText}
      {...other}
      style={[style]}
    />
  );
}

Input = forwardRef(Input);

export function PasswordInputX(props, ref) {
  const thisRef = useRef();
  const {theme} = useAppTheme();
  useImperativeHandle(ref, () => ({
    focus: () => {
      thisRef.current.focus();
    },
  }));

  const [visible, toggleVisibility] = useState(false);

  const toggle = () => {
    toggleVisibility(!visible);
  };

  return (
    <View>
      <Input ref={thisRef} {...props} secureTextEntry={!visible} />
      <View
        style={{
          position: 'absolute',
          justifyContent: 'flex-end',
          top: 0,
          bottom: 0,
          right: 0,
        }}>
        <TouchableOpacity onPress={toggle}>
          <View style={{padding: 10}}>
            <IconX
              origin={ICON_TYPE.ENTYPO}
              name={visible ? 'eye' : 'eye-with-line'}
              color={theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

PasswordInputX = React.memo(forwardRef(PasswordInputX));

export default React.memo(Input);
