import React from 'react';
import {Button} from 'react-native-paper';
import {Text} from 'react-native';
import {ICON_TYPE, IconX} from '../Icons';

export default ({
  label,
  color,
  style,
  mode,
  zeroMargin,
  onPress,
  loading,
  contentStyle,
  labelColor,
  icon,
  ...other
}) => {
  return (
    <Button
      style={[{marginTop: zeroMargin ? 0 : 20}, style]}
      loading={loading}
      mode={mode || 'contained'}
      contentStyle={{padding: 8, ...contentStyle}}
      color={color}
      onPress={!loading ? onPress : null}
      {...other}>
      {icon ? (
        <IconX
          origin={ICON_TYPE.ANT_ICON}
          style={{fontSize: 15, color: labelColor, marginRight: 10}}
          name={icon}
        />
      ) : null}
      <Text style={{color: labelColor}}>{label}</Text>
    </Button>
  );
};
