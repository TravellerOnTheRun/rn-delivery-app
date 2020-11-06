import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

export default (props) => {
  let style;
  if(props.active) {
    style = styles.iconTxtActive;
  } else {
    style = styles.iconTxt
  };
  return (
    <Text
      style={{
        ...style,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  iconTxt: {
    fontFamily: 'icons',
    fontSize: 28,
    color: 'white',
  },
  iconTxtActive: {
    fontFamily: 'icons',
    fontSize: 28,
    color: colors.active,
  }
});
