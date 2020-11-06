import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

export default (props) => {
  let Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
  return (
    <Touchable onPress={props.onPress} disabled={props.disabled}>
      {props.children}
    </Touchable>
  );
};
