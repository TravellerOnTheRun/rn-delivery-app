import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import TextReg from './utility/TextReg';
import Touchable from './utility/CrossPlatformTouchable';
import IconsTextComponent from './IconsTextComponent';
import AbsoluteBackground from './utility/AbsoluteBackground';

import colors from '../constants/colors';

export default (props) => {

  const [ showAddress, setShowAddress] = useState(false);

  return (
    <Touchable onPress={props.onPress}>
      <View style={styles.address}>
        <View style={styles.addressBar}>
          <AbsoluteBackground
            opacity={props.chosenAddress === props.address ? 0.8 : 0.5}
            color={colors.accent}
          />
          <TextReg style={styles.addressName}>{props.name}</TextReg>
          <Touchable onPress={() => setShowAddress(pr => !pr)}>
            <View style={styles.arrowContainer}>
              <IconsTextComponent style={styles.arrow}>d</IconsTextComponent>
            </View>
          </Touchable>
        </View>
        {showAddress ? (
          <View style={styles.inputView}>
            <TextInput value={props.address} style={styles.addressInput}/>
          </View>
        ) : null}
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  address: {
    width: '100%',
  },
  addressBar: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    elevation: 2,
    margin: -2,
  },
  inputView: {
    width: '100%',
    alignItems: 'center'
  },  
  addressInput: {
    borderBottomWidth: 2,
    borderColor: colors.accent,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    width: '85%'
  },  
  addressName: {
    fontSize: 14,
  },
  arrowContainer: {
    position: 'absolute',
    right: '10%',
  },
  arrow: {
    fontSize: 20,
    textAlign: 'center',
  },
});
