import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrderSummary from './OrderSummary';
import OrderInfo from './OrderInfo';
import Payment from './Payment';
import OrderFinished from './OrderFinished';

import MyHeader from '../../components/MyHeader';
import AddressForm from '../../components/AddressForm';

const OrderStack = createStackNavigator();

export default props => {
    return (
        <OrderStack.Navigator screenOptions={{
            header:({ scene, previous, navigation }) => {
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
            }}>
            <OrderStack.Screen name='OrderSummary' component={OrderSummary}/>
            <OrderStack.Screen name='OrderInfo' component={OrderInfo}/>
            <OrderStack.Screen name='OrderFinished' component={OrderFinished}/>
            <OrderStack.Screen name='Payment' component={Payment}/>
            <OrderStack.Screen name='AddressForm' component={AddressForm}/>
        </OrderStack.Navigator>
    );
};