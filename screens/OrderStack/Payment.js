import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useSelector, useDispatch } from 'react-redux';

import TextReg from '../../components/utility/TextReg';
import TextBold from '../../components/utility/TextBold';
import AbsoluteBackground from '../../components/utility/AbsoluteBackground';
import Touchable from '../../components/utility/CrossPlatformTouchable';
import Button from '../../components/Button';

import colors from '../../constants/colors';
import { CHANGE_PAYMENT_METHOD } from '../../store/actions';
import axios from 'axios';

export default (props) => {
  const dispatch = useDispatch();

  const [redirectData, setRedirectData] = useState();

  const orderType = useSelector((state) => state.orderData.orderType);
  const paymentMethod = useSelector((state) => state.orderData.paymentMethod);
  const totalAmount = useSelector((state) => state.orderData.totalAmount);
  const cartProducts = useSelector((state) => state.orderData.products);

  const _addLinkingListener = () => {
    console.log('adding linking event');
    Linking.addEventListener('url', _handleRedirect);
  };

  const _removeLinkingListener = () => {
    console.log('removing linking event');
    Linking.removeEventListener('url', _handleRedirect);
  };

  const _handleRedirect = (event) => {
    console.log(event.url);
    if (Platform.OS === 'ios') {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

    let data = Linking.parse(event.url);

    setRedirectData(data);
  };

  const sendOrderDataToPay = async () => {
    const transformedObjectsForPayment = cartProducts.map((prod) => {
      return {
        name: prod.title,
        price: prod.price.count,
        unit_amount: {
          currency_code: prod.price.currencyAbbr,
          value: prod.price.count,
        },
        quantity: prod.quantity,
      };
    });
    try {
      const response = await axios.post(
        'http://192.168.1.4:8080/orders/create',
        {
          products: transformedObjectsForPayment,
          totalAmount,
        }
      );
      if (Platform.OS === 'ios') {
        Linking.openURL(
          `http://192.168.1.4:9000?orderID=${response.data.orderID}`
        );
      } else {
        _addLinkingListener();
        await WebBrowser.openBrowserAsync(
          `http://192.168.1.4:9000?orderID=${
            response.data.orderID
          }&linkingUri=${Linking.makeUrl()}`
        );
        if (Platform.OS === 'ios') {
          _removeLinkingListener();
        }
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <View style={styles.headerView}>
          <TextReg style={styles.txt}>Pay with: </TextReg>
        </View>
        {orderType === 'delivery' ? (
          <View style={styles.paymentOptions}>
            <Touchable
              onPress={() =>
                dispatch({
                  type: CHANGE_PAYMENT_METHOD,
                  paymentMethod: 'credit card',
                })
              }
            >
              <View style={styles.paymentOptionCredit}>
                <AbsoluteBackground
                  color={
                    paymentMethod === 'credit card' ? colors.accent : '#c4c4c4'
                  }
                  opacity={paymentMethod === 'credit card' ? 1 : 0.5}
                />
                <TextReg style={styles.txt}>credit card</TextReg>
              </View>
            </Touchable>
            <Touchable
              onPress={() =>
                dispatch({ type: CHANGE_PAYMENT_METHOD, paymentMethod: 'cash' })
              }
            >
              <View style={styles.paymentOptionCash}>
                <AbsoluteBackground
                  color={paymentMethod === 'cash' ? colors.accent : '#c4c4c4'}
                  opacity={paymentMethod === 'cash' ? 1 : 0.5}
                />
                <TextReg style={styles.txt}>cash</TextReg>
              </View>
            </Touchable>
          </View>
        ) : (
          <View style={styles.paymentOptions}>
            <View style={{ ...styles.paymentOptionCredit, width: '100%' }}>
              <AbsoluteBackground
                color={
                  paymentMethod === 'credit card' ? colors.accent : '#c4c4c4'
                }
                opacity={paymentMethod === 'credit card' ? 1 : 0.5}
              />
              <TextReg style={styles.txt}>credit card</TextReg>
            </View>
          </View>
        )}
      </View>

      <View style={styles.bottom}>
        <TextBold style={styles.totalTxt}>{`TOTAL: ${totalAmount.toFixed(
          2
        )}$`}</TextBold>
        <Button
          onPress={sendOrderDataToPay}
          wrapStyle={{
            backgroundColor: colors.accent,
            width: '85%',
            height: 50,
          }}
          textStyle={{ fontSize: 24, letterSpacing: 1.6 }}
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
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  top: {
    width: '100%',
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    letterSpacing: 1.6,
  },
  totalTxt: {
    fontSize: 24,
    color: colors.accent,
    letterSpacing: 5,
    marginBottom: 20,
  },
  paymentOptions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentOptionCredit: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  paymentOptionCash: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
  },
});
