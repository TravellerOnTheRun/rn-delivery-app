import React from 'react';
import { View, StyleSheet } from 'react-native';

import IconsTextComponent from '../IconsTextComponent';
import Touchable from './CrossPlatformTouchable';

export default (props) => {
  return (
    <Touchable onPress={props.onPress}>
      <View style={{ ...styles.backBtn, ...props.styleView }}>
        <IconsTextComponent
          style={{ ...styles.backBtnFont, ...props.styleFont }}
        >
          l
        </IconsTextComponent>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: '12%',
    left: '5%',
  },
  backBtnFont: {
    fontSize: 45,
  },
});
