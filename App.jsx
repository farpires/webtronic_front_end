import React from 'react';
import {Text} from 'react-native';
import { Provider } from "react-redux";
import {store} from './src/store';

function App() {
  return (
    <Provider store={store} >
      <Text>Rick & Morty</Text>
    </Provider>
  );
}

export default App;