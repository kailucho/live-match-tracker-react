import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MatchesList from './features/matches/MatchesList';

function App() {
  return (
    <Provider store={store}>
      <MatchesList />
    </Provider>
  );
}

export default App;