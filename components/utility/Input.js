import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import TextReg from './TextReg';
import AbsoluteBackground from './AbsoluteBackground';

import colors from '../../constants/colors';

export default (props) => {
  return (
    <View style={{ ...styles.main, ...props.style }}>
      <TextReg style={{ ...styles.label, ...props.labelStyle }}>
        {props.label}
      </TextReg>
      <View style={styles.inputView}>
        <AbsoluteBackground color={'#c4c4c4'} opacity={0.2}/>
        <TextInput
          style={{ ...styles.input, ...props.inputStyle }}
          value={props.value}
          onChangeText={props.onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '85%',
    height: 85,
  },
  inputView: {
    width: '100%',
    height: 55
  },
  input: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
    width: '100%',
    height: '100%'
  },
  label: {
    fontSize: 14,
    color: colors.primary,
    opacity: 0.5,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginBottom: 10
  },
});
