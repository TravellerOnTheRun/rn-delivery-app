import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import TextReg from '../components/utility/TextReg';
import TextBold from './utility/TextBold';
import IconsTextComponent from './IconsTextComponent';
import Touchable from '../components/utility/CrossPlatformTouchable';

import {
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from '../store/actions';
import colors from '../constants/colors';

export default (props) => {
  const dispatch = useDispatch();

  const [showDetails, setShowDetails] = useState(false);

  const { imgUrl, title, price, additionals, quantity, _id } = props;

  const addQuantity = () => {
    dispatch({ type: ADD_QUANTITY, productId: _id });
  };

  const subtractQuantity = () => {
    if (quantity <= 1) {
      return;
    }
    dispatch({ type: SUBTRACT_QUANTITY, productId: _id });
  };

  const removeProductFromCart = () => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, productId: _id });
  };

  // useEffect(() => {
  //   console.log('[details]: ', details);
  // }, [])

  return (
    <View style={styles.fooditem}>
      <View style={styles.imgTitlePriceContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: imgUrl }} />
        </View>
        <View style={styles.titleCountContainer}>
          <View style={styles.titleCount}>
            <TextBold>{title}</TextBold>
          </View>
          {showDetails ? (
            <View style={styles.titleCount}>
              {additionals.map((ad) => (
                <TextReg key={ad} style={styles.details}>
                  {ad}
                </TextReg>
              ))}
            </View>
          ) : null}
          <View style={styles.titleCount}>
            <View style={styles.arrowsCountBoxContainer}>
              <Touchable onPress={addQuantity}>
                <View>
                  <IconsTextComponent style={styles.arrow}>
                    R
                  </IconsTextComponent>
                </View>
              </Touchable>
              <View style={styles.countBox}>
                <TextReg>{quantity}</TextReg>
              </View>
              <Touchable onPress={subtractQuantity}>
                <View>
                  <IconsTextComponent style={styles.arrow}>
                    L
                  </IconsTextComponent>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceView}>
            <TextBold style={styles.priceText}>{`${price.count.toFixed(2)}${
              price.currencySign
            }`}</TextBold>
          </View>
          <View style={styles.priceView}>
            <Touchable onPress={removeProductFromCart}>
              <View style={styles.trash}>
                <IconsTextComponent style={styles.trash}>t</IconsTextComponent>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
      <Touchable onPress={() => setShowDetails((prevState) => !prevState)}>
        <View style={styles.viewDetailsView}>
          {showDetails ? (
            <TextReg>Hide Details</TextReg>
          ) : (
            <TextReg>View Details</TextReg>
          )}
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  fooditem: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  imgTitlePriceContainer: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
  },
  viewDetailsView: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
  },
  titleCountContainer: {
    flex: 3,
  },
  //price container styles
  priceContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  priceText: {
    fontSize: 20,
    color: colors.accent,
    letterSpacing: 1.6,
  },

  //title and count styles
  titleCount: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  arrowsCountBoxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  countBox: {
    width: 70,
    height: 30,
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  arrow: {
    fontSize: 30,
    color: colors.primary,
    marginHorizontal: 10,
    opacity: 0.6,
  },
  details: {
    fontSize: 14,
    color: colors.primary,
    opacity: 0.6,
  },

  //price container styles
  priceView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
  },
  trash: {
    height: 25,
    width: 25,
    fontSize: 25,
    color: colors.primary,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
});
