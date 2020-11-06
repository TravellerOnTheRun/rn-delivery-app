import React from 'react';
import { View, StyleSheet } from 'react-native';

import TextBold from '../components/utility/TextBold';
import colors from '../constants/colors';

export default (props) => {
  const viewStyleProps = {
    width: props.size || 40,
    height: props.size || 40,
    borderRadius: props.size * 0.5 || 20,
    top: props.top || props.top === 0 ? props.top.toString() + '%' : '5%',
    right: props.right || props.right === 0 ? props.right.toString() + '%' : '5%',
    backgroundColor: props.opacity
      ? 'transparent'
      : props.color
      ? props.color
      : colors.accent,
  };

  const textStyleProps = {
    fontSize: props.size / 3 || 13,
  };
  return (
    <View style={{ ...styles.badge, ...viewStyleProps }}>
      {props.opacity ? (
        <View
          style={{
            ...styles.backgroundView,
            backgroundColor: props.color,
            opacity: props.opacity,
            borderRadius: props.size * 0.5 || 20,
          }}
        ></View>
      ) : null}
      <TextBold style={textStyleProps}>{props.content}</TextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: colors.active,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  defaultText: {
    fontSize: 36,
  },
  backgroundView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
