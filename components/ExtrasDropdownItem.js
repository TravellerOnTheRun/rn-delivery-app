import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import TextReg from './utility/TextReg';
import Touchable from './utility/CrossPlatformTouchable';
import colors from '../constants/colors';

export default (props) => {
  return (
    <Touchable
      onPress={() => {
        props.onChosen();
      }}
      key={props.value}
    >
      <View style={styles.additionalsItem}>
        <View
          style={
            props.isActive
              ? styles.absoluteBackgroundActive
              : styles.absoluteBackgroundGrey
          }
        ></View>
        <TextReg style={styles.text}>{props.value}</TextReg>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  absoluteBackgroundGrey: {
    position: 'absolute',
    width: '100%',
    height: 40,
    backgroundColor: '#C4C4C4',
    opacity: 0.4,
  },
  absoluteBackgroundActive: {
    position: 'absolute',
    width: '100%',
    height: 40,
    backgroundColor: colors.accent,
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
    letterSpacing: 3,
    marginRight: 20,
  },
  additionalsItem: {
    width: '49.5%',
    height: 40,
    marginRight: 2,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
