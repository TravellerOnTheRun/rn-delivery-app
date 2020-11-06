import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducer';

import AppNavigator from './navigation/AppNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'serif-bold': require('./assets/fonts/PTSerif-Bold.ttf'),
    'serif-reg': require('./assets/fonts/PTSerif-Regular.ttf'),
    icons: require('./assets/fonts/icomoon.ttf'),
  });
};

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
