/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import FirstPage from './pages/FirstPage';
import { Provider } from 'react-redux';
import store from './redux/store';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <FirstPage />
    </Provider>
  );
}

export default App;
