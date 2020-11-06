import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import colors from '../constants/colors';
import Text from './utility/TextBold';
import Touchable from './utility/CrossPlatformTouchable';

export default (props) => {
  let wrapperStyle = styles.txtWrapper;
  let textStyle = styles.txt;
  if (props.outlined) {
    wrapperStyle = styles.txtWrapperOutlined;
    textStyle = styles.txtColor;
  } else if (props.disabled) {
    wrapperStyle = styles.txtWrapDisabled;
    textStyle = styles.txt;
  } else if (props.empty) {
    wrapperStyle = styles.txtWrapEmpty;
    textStyle = styles.txtEmpty;
  };
  
  return (
    <Touchable
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <View style={{ ...wrapperStyle, ...props.wrapStyle }}>
        <Text style={{ ...textStyle, ...props.textStyle }}>
          {props.children}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  txtWrapperOutlined: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'solid',
    borderRadius: 54,
  },
  txtWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54,
    backgroundColor: colors.primary,
  },
  txtWrapDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54,
    backgroundColor: colors.inactive,
  },
  txtWrapEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54,
  },
  txtColor: {
    fontSize: 14,
    color: colors.primary,
  },
  txt: {
    fontSize: 14,
    color: 'white',
  },
  txtEmpty: {
    fontSize: 14,
    color: colors.primary,
  },
});
