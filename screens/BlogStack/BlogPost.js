import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FiltersBar from '../../components/FiltersBar';

import { blogCategories } from '../../data/data';

export default (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.filtersArea}>
        <FiltersBar data={blogCategories}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersArea: {
    height: '20%',
  },
});