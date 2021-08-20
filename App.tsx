import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/components/redux/store';
import Navigation from './src/Navigation';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
