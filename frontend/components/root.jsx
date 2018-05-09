import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from '../store/store';


// below if I destructure to { store } I get error
//  Failed prop type: The prop `store` is marked as required in `Provider`, but its value is `undefined`.
//  in Provider (created by Root) in Root
const Root = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
