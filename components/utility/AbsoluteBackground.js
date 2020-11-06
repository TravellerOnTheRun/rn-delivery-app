import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default (props) => {
  let settings = {
    backgroundColor: props.color || colors.accent,
    opacity: props.opacity || 1,
    height: props.height || '100%',
    width: props.width || '100%'
  };
  return <View style={{ ...styles.main, ...settings, ...props.style }}></View>;
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
  },
});
