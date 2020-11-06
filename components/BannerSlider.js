import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

import TextBold from './utility/TextBold';
import Touchable from './utility/CrossPlatformTouchable';

export default (props) => {
  return (
    <View style={{ ...styles.bannerSliderContainer, ...props.style }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.banners.map((b) => {
          return (
            <Touchable key={b.id}>
              <View style={styles.bannerContainer}>
                <Image source={b.imgUrl} />
                <TextBold style={styles.textCentered}>{b.title}</TextBold>
              </View>
            </Touchable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerSliderContainer: {
    width: '100%',
    height: '100%'
  },  
  bannerContainer: {
    justifyContent: 'center',
  },
  textCentered: {
    alignSelf: 'center',
    position: 'absolute',
    color: 'white',
    letterSpacing: 4,
  },
});
