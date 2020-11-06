import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Input from './utility/Input';
import AbsoluteBackground from './utility/AbsoluteBackground';
import Button from './Button';
import BackBtn from './utility/BackButton';

import colors from '../constants/colors';

export default (props) => {
  const [nameValue, setNameValue] = useState('');
  const [addressValue, setAddressValue] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.inputArea}>
        <AbsoluteBackground color={'#c4c4c4'} opacity={0.2} />
        <Input
          label="name of the place:"
          value={nameValue}
          style={{ marginVertical: 25 }}
        />
        <Input label="address of the place:" value={addressValue} />
      </View>
      <View style={styles.btnArea}>
        <Button wrapStyle={styles.btnWrap} textStyle={styles.btntxt}>
          Submit Address
        </Button>
      </View>
      <BackBtn
        onPress={() => props.navigation.goBack()}
        styleFont={{ color: colors.primary }}
        styleView={{ top: 20, left: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputArea: {
    width: '100%',
    height: 260,
    alignItems: 'center',
  },
  btnArea: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrap: {
    width: '85%',
    height: 50,
    backgroundColor: colors.accent,
  },
  btntxt: {
    fontSize: 24,
  },
});
