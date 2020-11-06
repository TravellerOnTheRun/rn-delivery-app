import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import FoodItem from '../../components/Product';
import FiltersBar from '../../components/FiltersBar';
import BannerSlider from '../../components/BannerSlider';
import IconsTextComponent from '../../components/IconsTextComponent';
import Touchable from '../../components/utility/CrossPlatformTouchable';

import { products } from '../../data/data';
import { categories } from '../../data/data';
import { ADD_PRODUCTS_AFTER_FETCHING } from '../../store/actions';
import colors from '../../constants/colors';

import salesBanner from '../../assets/images/sales_button.png';
import specialOfferBanner from '../../assets/images/special_offers_button.png';

const bannersArray = [
  {
    id: 1111,
    imgUrl: salesBanner,
    title: 'SALES',
  },
  {
    id: 112,
    imgUrl: specialOfferBanner,
    title: 'SPECIAL OFFERS',
  },
];

export default (props) => {
  const dispatch = useDispatch();
  const productsFromState = useSelector(state => state.products);

  const [activeCategory, setActiveCategory] = useState('all');

  const changeCategoryHandler = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCTS_AFTER_FETCHING, products });
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.banner}>
        <BannerSlider banners={bannersArray} />
        <Touchable>
          <View style={styles.wrapperAroundArrow}>
            <IconsTextComponent style={styles.rightArrow}>R</IconsTextComponent>
          </View>
        </Touchable>
      </View>
      <View style={styles.filters}>
        <FiltersBar
          data={categories}
          activeCategory={activeCategory}
          onChangeCategory={changeCategoryHandler}
        />
      </View>
      <View style={styles.fooditems}>
        <ScrollView
          contentContainerStyle={styles.scrollViewArea}
          showsVerticalScrollIndicator={false}
        >
          {productsFromState.map((p) => {
            return p.categories.map((c) => {
              if (c === activeCategory) {
                return (
                  <FoodItem
                    navigation={props.navigation}
                    key={p._id}
                    _id={p._id}
                    title={p.title}
                    desc={p.desc}
                    price={p.price}
                    imgUrl={p.imgUrl}
                    defaultSize={p.defaultSize}
                    discount={p.discount}
                    extras={p.extras}
                  />
                );
              }
            });
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    flex: 2,
    width: '100%',
    paddingLeft: 10,
  },
  wrapperAroundArrow: {
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 0.8,
  },
  rightArrow: {
    fontSize: 60,
  },
  filters: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  fooditems: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollViewArea: {
    width: '100%',
  },
});
