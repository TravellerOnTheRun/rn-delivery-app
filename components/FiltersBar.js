import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Button from './Button';

export default (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        data={props.data}
        renderItem={({ item }) => {
          return (
            <Button
              wrapStyle={styles.btnCont}
              textStyle={styles.textStyle}
              empty={item.value === props.activeCategory ? false : true}
              onPress={props.onChangeCategory.bind(this, item.value)}
            >
              {item.label}
            </Button>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    paddingLeft: 30,
  },
  btnCont: {
    width: 85,
    height: 32,
    marginHorizontal: 5,
  },
});
