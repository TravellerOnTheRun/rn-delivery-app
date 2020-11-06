import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from './Button';
import colors from '../constants/colors';
import TextReg from './utility/TextReg';
import TextBold from './utility/TextBold';
import Touchable from './utility/CrossPlatformTouchable';
import IconTextComponent from './IconsTextComponent';
import Badge from './Badge';

import { ADD_PRODUCT_TO_CART } from '../store/actions';

export default (props) => {
  const dispatch = useDispatch();

  const {
    _id,
    imgUrl,
    title,
    desc,
    price,
    defaultSize,
    discount,
    currency,
    extras,
  } = props;

  sendDefaultProductToCart = () => {
    const product = {
      productId: _id,
      imgUrl,
      title,
      price,
      additionals: [defaultSize],
      quantity: 1,
    };
    dispatch({ type: ADD_PRODUCT_TO_CART, product });
  };

  return (
    <Touchable
      onPress={() => {
        props.navigation.navigate('ProductOverview', {
          imgUrl,
          title,
          desc,
          price,
          discount,
          currency,
          extras,
          defaultSize,
          _id,
        });
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.imgCont}>
          <Image style={styles.img} source={{ uri: imgUrl }} />
          {props.discount > 0 ? (
            <Badge
              top={-10}
              right={-15}
              size={50}
              content={`-${discount}%`}
              opacity={0.8}
              color={colors.accent}
            />
          ) : null}
        </View>
        <View style={styles.infoCont}>
          <View style={styles.descContainer}>
            <View style={styles.titleContainer}>
              <TextBold style={styles.title}>{title}</TextBold>
              <TextReg style={styles.size}>{defaultSize}</TextReg>
            </View>
            <TextReg style={styles.desc}>{desc}</TextReg>
          </View>
          <View style={styles.btnContainer}>
            {discount > 0 ? (
              <>
                <Button
                  onPress={sendDefaultProductToCart}
                  wrapStyle={styles.btnWrap}
                  textStyle={styles.spacedText}
                >{`${(price.count * (1 - discount / 100)).toFixed(1)}${
                  price.currencyAbbr
                }`}</Button>
                <View style={styles.discount}>
                  <TextReg
                    style={styles.spacedText}
                  >{`${price.count}${price.currencyAbbr}`}</TextReg>
                  <IconTextComponent style={styles.cross}>c</IconTextComponent>
                </View>
              </>
            ) : (
              <Button
                onPress={sendDefaultProductToCart}
                wrapStyle={styles.btnWrap}
                textStyle={styles.spacedText}
              >{`${price.count}${price.currencyAbbr}`}</Button>
            )}
          </View>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  imgCont: {
    width: 120,
    maxWidth: '35%',
  },
  infoCont: {
    width: '65%',
    paddingLeft: 20,
  },
  img: {
    flex: 1,
    borderRadius: 15,
  },
  descContainer: {
    width: '100%',
    height: '65%',
  },
  btnContainer: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    paddingLeft: 20,
    fontSize: 18,
  },
  size: {
    fontSize: 12,
    paddingRight: 10,
  },
  desc: {
    fontSize: 14,
  },
  btnWrap: {
    width: 150,
    height: 44,
    backgroundColor: colors.accent,
  },
  spacedText: {
    fontSize: 16,
    letterSpacing: 6,
  },
  cross: {
    position: 'absolute',
    fontSize: 40,
    color: colors.active,
  },
  discount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
