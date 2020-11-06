import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from './Menu';
import ProductOverview from './ProductOverview';
import MyHeader from '../../components/MyHeader';

const MenuStack = createStackNavigator();

export default (props) => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
          
            return (
              <MyHeader
                title={title}
                style={options.headerStyle}
              />
            );
          },
          headerMode: 'screen',
        }}
      />
      <MenuStack.Screen
        name="ProductOverview"
        component={ProductOverview}
        options={{
          headerShown: false,
        }}
      />
    </MenuStack.Navigator>
  );
};
