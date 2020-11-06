import React from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../components/Logo';
import TextBold from './utility/TextBold';


import SomeLogoImage from '../assets/images/logo.png';
import colors from '../constants/colors';

export default (props) => {
  return (
    <View style={styles.headerContainer}>
      {/* <View style={styles.headerText}>
        <TextBold style={styles.txt}>YOUR</TextBold>
        <TextBold style={styles.txt}>COFFEE</TextBold>
      </View> */}
      <View style={styles.logoContainer}>
        <Logo imageSource={SomeLogoImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  logoContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  headerText: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
  },
  txt: {
    width: '50%',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 6,
  },
});
