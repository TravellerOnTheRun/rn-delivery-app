import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../constants/colors';

import MenuStack from '../screens/MenuStack/MenuStack';
import OrderStack from '../screens/OrderStack/OrderStack';
import Profile from '../screens/Profile/Profile';
import BlogStack from '../screens/BlogStack/BlogStack';

import Text from '../components/IconsTextComponent';
import Badge from '../components/Badge';

const Tabs = createBottomTabNavigator();

export default (props) => {
  const amountOfProductsInOrder = useSelector(
    (state) => state.orderData.products
  ).length;

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            const isActive = focused ? true : false;
            if (route.name === 'Orders') {
              icon = '4';
            } else if (route.name === 'Profile') {
              icon = '2';
            } else if (route.name === 'Additional') {
              icon = '3';
            } else {
              icon = '1';
            }

            // You can return any component that you like here!
            return (
              <View>
                <Text style={{ fontSize: 30 }} active={isActive}>
                  {icon}
                </Text>
                {route.name === 'Orders' && amountOfProductsInOrder > 0 ? (
                  <Badge
                    size={20}
                    top={-20}
                    right={-10}
                    content={amountOfProductsInOrder}
                  />
                ) : null}
              </View>
            );
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: colors.primary,
          },
          activeTintColor: colors.active,
          inactiveTintColor: 'white',
          labelStyle: {
            fontFamily: 'serif-bold',
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="Menu"
          component={MenuStack}
          options={{
            tabBarLabel: 'MENU',
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'PROFILE',
          }}
        />
        <Tabs.Screen
          name="Additional"
          component={BlogStack}
          options={{
            tabBarLabel: 'BLOG',
          }}
        />
        <Tabs.Screen
          name="Orders"
          component={OrderStack}
          options={{
            tabBarLabel: 'CART',
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
