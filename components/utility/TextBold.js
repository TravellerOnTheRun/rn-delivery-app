import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default (props) => {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'serif-bold',
    fontSize: 18
  },
});
