import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={styles.centered}>
            <Text>Profile Tab</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });