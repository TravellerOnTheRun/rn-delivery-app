import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

import Button from '../../components/Button';
import Touchable from '../../components/utility/CrossPlatformTouchable';
import TextReg from '../../components/utility/TextReg';
import TextBold from '../../components/utility/TextBold';
import IconTextComponent from '../../components/IconsTextComponent';
import ExtrasDropdown from '../../components/ExtrasDropdown';
import Badge from '../../components/Badge';
import BackBtn from '../../components/utility/BackButton';

import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT_TO_CART, ADD_QUANTITY } from '../../store/actions';

export default (props) => {
  const dispatch = useDispatch();

  const {
    imgUrl,
    title,
    price,
    desc,
    discount,
    extras,
    defaultSize,
    _id,
  } = props.route.params;

  const [additionalPrice, setAdditionalPrice] = useState(0);

  const [productPrice, setProductPrice] = useState(
    +(price.count * (1 - discount / 100)).toFixed(2)
  );

  const [chosenExtras, setExtras] = useState(
    extras.map((ex) => {
      let chosenExtraObj;
      if (!ex.allowCombination) {
        chosenExtraObj = {
          name: ex.name,
          values: ex.values[0].valueName,
          allowCombination: ex.allowCombination,
        };
      } else {
        chosenExtraObj = {
          name: ex.name,
          values: [],
          allowCombination: ex.allowCombination,
        };
      }
      return (ex = chosenExtraObj);
    })
  );

  const [activeValues, setActiveValues] = useState([]);

  const findValues = (extrasName, extrasValue) => {
    const values = extras.find((ex) => ex.name === extrasName).values.slice();
    if (extrasValue) {
      return values.find((valueObj) => valueObj.valueName === extrasValue)
        .priceChange;
    }
    return values;
  };

  const onAdditionalChosenChangePriceAddValue = (extrasName, extrasValue) => {
    const newExtra = chosenExtras.find((ex) => ex.name === extrasName);
    let newExtraValues;
    if (newExtra.allowCombination) {
      newExtraValues = newExtra.values.slice();
      const index = newExtraValues.indexOf(extrasValue);
      console.log('index: ' + index);

      if (index >= 0) {
        newExtraValues.splice(index, 1);
        const subtractSome = findValues(extrasName, extrasValue);
        setAdditionalPrice((prevState) => prevState - subtractSome);
      } else {
        newExtraValues.push(extrasValue);
        const addSome = findValues(extrasName, extrasValue);
        setAdditionalPrice((prevState) => prevState + addSome);
      }
    } else {
      newExtraValues = extrasValue;
      setProductPrice((prevState) => {
        const price = findValues(extrasName, extrasValue);
        if (discount > 0) {
          return +(price * (1 - discount / 100)).toFixed(2);
        }
        return price;
      });
    }

    setExtras((prevState) =>
      prevState.map((ex) => {
        if (ex.name === extrasName) {
          return {
            ...ex,
            values: newExtraValues,
          };
        }
        return ex;
      })
    );
  };

  const sendProductToCart = () => {
    const chosenAdditionals = [];

    for (const ex of chosenExtras) {
      if (ex.allowCombination) {
        chosenAdditionals.push(...ex.values);
      } else {
        chosenAdditionals.push(ex.values);
      }
    }

    const product = {
      productId: _id,
      quantity: 1,
      additionals: chosenAdditionals,
      title,
      price: {
        ...price,
        count: productPrice + additionalPrice,
      },
      imgUrl,
    };
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      product,
    });
  };

  useEffect(() => {
    console.log('[chosenExtras]: ', chosenExtras);
    let activeValues = [];
    for( const ex of chosenExtras) {
      activeValues = activeValues.concat(ex.values);
    };
    setActiveValues(activeValues);
  }, [chosenExtras]);

  useEffect(() => {
    console.log('[chosenExtras]: ', chosenExtras);
    // console.log('[productPrice]: ', productPrice);
    // console.log('[additionalPrice]: ', additionalPrice);
  }, [productPrice, additionalPrice]);

  return (
    <View style={styles.screen}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: imgUrl }} />
        <View
          style={{
            ...styles.titlePriceShared,
            ...styles.titlePriceContainerBackground,
          }}
        ></View>
        <View
          style={{ ...styles.titlePriceShared, ...styles.titlePriceContainer }}
        >
          <TextBold style={styles.title}>{title.toUpperCase()}</TextBold>
          <View style={styles.pricesContainer}>
            {discount > 0 ? (
              <>
                <View style={styles.pricesShared}>
                  <TextBold
                    style={{ ...styles.price, ...styles.exPrice }}
                  >{`${price.count}${price.currencySign}`}</TextBold>
                  <IconTextComponent style={styles.cross}>c</IconTextComponent>
                </View>
                <TextBold
                  style={{ ...styles.pricesShared, ...styles.price }}
                >{`${productPrice + additionalPrice}${
                  price.currencySign
                }`}</TextBold>
              </>
            ) : (
              <TextBold style={styles.price}>{`${
                productPrice + additionalPrice
              }${price.currencySign}`}</TextBold>
            )}
          </View>
        </View>
        <BackBtn onPress={() => props.navigation.goBack()}/>
        {discount > 0 ? (
          <Badge
            content={`-${discount}%`}
            size={120}
            opacity={0.8}
            color={colors.accent}
          />
        ) : null}
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.descContainer}>
          <TextReg style={styles.desc}>{desc}</TextReg>
        </View>
        <View style={styles.extrasContainer}>
          <ScrollView contentContainerStyle={styles.scrollExtras}>
            {extras.map((ex) => (
              <ExtrasDropdown
                onAdditionalChosen={onAdditionalChosenChangePriceAddValue}
                key={ex.name}
                name={ex.name}
                values={ex.values}
                activeValues={activeValues}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.btnArea}>
        <Button
          onPress={() => sendProductToCart()}
          wrapStyle={styles.btn}
          textStyle={styles.btntxt}
        >{`Add To Cart`}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgCont: {
    width: '100%',
    height: '50%',
  },
  addInfoContainer: {
    width: '100%',
    height: '40%',
  },
  btnArea: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  titlePriceShared: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    height: 50,
  },
  titlePriceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titlePriceContainerBackground: {
    backgroundColor: colors.active,
    opacity: 0.5,
  },
  pricesContainer: {
    width: '50%',
    flexDirection: 'row',
  },
  title: {
    width: '50%',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 3,
  },
  pricesShared: {
    width: '50%',
    alignItems: 'center',
  },
  exPrice: {
    fontSize: 24,
    opacity: 0.5,
  },
  cross: {
    position: 'absolute',
    fontSize: 40,
    color: colors.active,
  },
  price: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 3,
  },
  extrasContainer: {
    flex: 4,
    paddingVertical: 15,
  },
  scrollExtras: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  descContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  desc: {
    fontSize: 20,
    color: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn: {
    width: '85%',
    height: 50,
    backgroundColor: colors.accent,
  },
  btntxt: {
    fontSize: 24,
  },
});
