import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

// import IconTextComponent from '../components/IconsTextComponent';


export default (props) => {
  let component = (
    <Image
      source={props.imageSource}
      style={{ ...styles.logo, ...props.style }}
    />
  );
  // if (props.fontChar) {
  //   component = (
  //     <IconTextComponent style={{ ...styles.logoFont, ...props.style }}>
  //       {props.fontChar}
  //     </IconTextComponent>
  //   );
  // }

  return component;
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
  logoFont: {
    fontSize: 50,
  },
});
