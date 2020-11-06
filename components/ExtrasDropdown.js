import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ExtrasDropdownItem from './ExtrasDropdownItem';
import TextReg from '../components/utility/TextReg';
import IconTextComponent from '../components/IconsTextComponent';
import Touchable from '../components/utility/CrossPlatformTouchable';

import colors from '../constants/colors';

export default (props) => {
  const [showAdditionals, setShowAdditionals] = useState(false);

  return (
    <Touchable onPress={() => setShowAdditionals((prevState) => !prevState)}>
      <View style={{ ...styles.container, ...props.style }}>
        <View
          style={
            showAdditionals
              ? styles.absoluteBackgroundActive
              : styles.absoluteBackground
          }
        ></View>
        <View style={styles.titleArrow}>
          <TextReg style={styles.text}>{props.name}</TextReg>
          {showAdditionals ? (
            <Touchable
              onPress={() => setShowAdditionals((prevState) => !prevState)}
            >
              <View>
                <IconTextComponent style={styles.arrow}>u</IconTextComponent>
              </View>
            </Touchable>
          ) : (
            <Touchable
              onPress={() => setShowAdditionals((prevState) => !prevState)}
            >
              <View>
                <IconTextComponent style={styles.arrow}>d</IconTextComponent>
              </View>
            </Touchable>
          )}
        </View>
        <View style={styles.additionals}>
          {showAdditionals
            ? props.values.map(({ valueName }) => (
                <ExtrasDropdownItem
                  onChosen={() => {
                    props.onAdditionalChosen(props.name, valueName);
                  }}
                  value={valueName}
                  isActive={props.activeValues.indexOf(valueName) >= 0}
                />
              ))
            : null}
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 2,
  },
  titleArrow: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteBackground: {
    position: 'absolute',
    width: '100%',
    height: 40,
    backgroundColor: colors.accent,
    opacity: 0.6,
  },
  absoluteBackgroundActive: {
    position: 'absolute',
    width: '100%',
    height: 40,
    backgroundColor: colors.accent,
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
    letterSpacing: 3,
    marginRight: 20,
  },
  arrow: {
    fontSize: 20,
    opacity: 0.8,
  },
  additionals: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
