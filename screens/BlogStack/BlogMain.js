import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import FiltersBar from '../../components/FiltersBar';

import { blogCategories } from '../../data/data';

export default (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.filtersArea}>
        <FiltersBar data={blogCategories} onChangeCategory={() => {}} />
      </View>
      <ScrollView>

      </ScrollView>
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
