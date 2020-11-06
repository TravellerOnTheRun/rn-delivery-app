import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BlogMainScreen from './BlogMain';
import BlogPostScreen from './BlogPost';
import MyHeader from '../../components/MyHeader';

const BlogStack = createStackNavigator();

export default (props) => {
  return (
    <BlogStack.Navigator>
      <BlogStack.Screen
        name="BlogMain"
        component={BlogMainScreen}
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
          headerMode: 'screen'
        }}
      />
      <BlogStack.Screen
        name="BlogPost"
        component={BlogPostScreen}
        options={{
          headerShown: false,
        }}
      />
    </BlogStack.Navigator>
  );
};
