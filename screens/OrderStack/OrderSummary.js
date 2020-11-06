import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import OrderItem from '../../components/OrderItem';
import TextBold from '../../components/utility/TextBold';

import colors from '../../constants/colors';

export default (props) => {
  const products = useSelector((state) => state.orderData.products);
  const totalAmount = useSelector((state) => state.orderData.totalAmount);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {products.length === 0 ? (
          <Text>No products to check out</Text>
        ) : (
          products.map((p) => {
            return (
                <OrderItem
                  key={p.productId}
                  navigation={props.navigation}
                  title={p.title}
                  price={p.price}
                  imgUrl={p.imgUrl}
                  additionals={p.additionals}
                  quantity={p.quantity}
                  _id={p.productId}
                />
            );
          })
        )}
      </ScrollView>
      <View style={styles.summaryContainer}>
        <TextBold style={styles.total}>{`TOTAL: ${totalAmount.toFixed(
          2
        )}$`}</TextBold>
        <Button
          onPress={() => props.navigation.navigate('OrderInfo')}
          wrapStyle={
            products.length === 0 ? styles.btnWrapDisabled : styles.btnWrap
          }
          textStyle={styles.btntxt}
          disabled={products.length === 0}
        >
          Order Now
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  summaryContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnWrap: {
    width: '85%',
    height: 60,
    backgroundColor: colors.accent,
  },
  btnWrapDisabled: {
    width: '85%',
    height: 60,
    backgroundColor: colors.inactive,
  },
  btntxt: {
    fontSize: 24,
  },
  total: {
    fontSize: 24,
    letterSpacing: 6,
    color: colors.accent,
  },
  scrollView: {
    marginVertical: 15,
  },
});
