import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import TextBold from '../../components/utility/TextBold';
import Button from '../../components/Button';
import AbsoluteBackground from '../../components/utility/AbsoluteBackground';
import Touchable from '../../components/utility/CrossPlatformTouchable';
import AddressBar from '../../components/AddressBar';
import BackBtn from '../../components/utility/BackButton';
import TextReg from '../../components/utility/TextReg';

import colors from '../../constants/colors';
import { CHANGE_ORDER_TYPE } from '../../store/actions';

export default (props) => {
  const dispatch = useDispatch();
  const orderType = useSelector((state) => state.orderData.orderType);
  const addresses = useSelector((state) => state.userData.addresses);

  const [chosenAddress, setChosenAddress] = useState('');
  const [showAddress, setShowAddress] = useState(false);

  useEffect(() => {
    console.log('[chosenAddress]: ', chosenAddress);
  }, [chosenAddress]);

  return (
    <View style={styles.screen}>
      <View style={styles.orderTypePickupBar}>
        <Touchable
          onPress={() =>
            dispatch({ type: CHANGE_ORDER_TYPE, orderType: 'delivery' })
          }
        >
          <View style={styles.orderTypePickupBarItem}>
            <AbsoluteBackground
              opacity={0.5}
              color={colors.accent}
              style={
                orderType === 'delivery'
                  ? styles.orderTypePickupBarActive
                  : null
              }
            />
            <TextBold>{'Delivery'.toUpperCase()}</TextBold>
            <BackBtn
              onPress={() => props.navigation.goBack()}
              styleView={{ right: 10, top: 20}}
            />
          </View>
        </Touchable>
        <Touchable
          onPress={() =>
            dispatch({ type: CHANGE_ORDER_TYPE, orderType: 'pickup' })
          }
        >
          <View style={styles.orderTypePickupBarItem}>
            <AbsoluteBackground
              opacity={0.5}
              color={colors.accent}
              style={
                orderType === 'pickup' ? styles.orderTypePickupBarActive : null
              }
            />
            <TextBold>{'Pick Up'.toUpperCase()}</TextBold>
          </View>
        </Touchable>
      </View>
      {orderType === 'delivery' ? (
        <View style={styles.mainArea}>
          {addresses.map((a) => (
            <AddressBar
              key={a.name}
              name={a.name}
              address={a.address}
              onPress={() => setChosenAddress(a.address)}
              chosenAddress={chosenAddress}
              showAddress={showAddress}
            />
          ))}
          <Touchable onPress={() => props.navigation.navigate('AddressForm')}>
            <View style={styles.addAnotherAddressButton}>
              <TextReg style={styles.anotherAddressText}>
                Add another address
              </TextReg>
            </View>
          </Touchable>
        </View>
      ) : (
        <View style={styles.mainArea}></View>
      )}
      <View style={styles.btnArea}>
        <Button
          onPress={() => props.navigation.navigate('Payment')}
          disabled={chosenAddress.trim() === ''}
          wrapStyle={
            chosenAddress.trim() === ''
              ? styles.btnWrapDisabled
              : styles.btnWrap
          }
          textStyle={styles.btntxt}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  //top bar styles
  orderTypePickupBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  orderTypePickupBarItem: {
    flexDirection: 'row-reverse',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderTypePickupBarActive: {
    opacity: 0.8,
  },

  //main area styles
  mainArea: {
    flex: 8,
    alignItems: 'center',
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
  },
  btnWrap: {
    backgroundColor: colors.accent,
    width: '85%',
    height: 50,
  },
  btnWrapDisabled: {
    backgroundColor: colors.inactive,
    width: '85%',
    height: 50,
  },
  btntxt: {
    fontSize: 24,
  },
  addAnotherAddressButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
  },
  anotherAddressText: {
    fontSize: 16,
    color: 'white',
    textShadowColor: colors.primary,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    textShadowRadius: 1,
  },
});
