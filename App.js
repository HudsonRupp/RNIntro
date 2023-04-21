import { Provider } from "react-redux";
import store from "./store/store";
import React from  'react';

import AppMain from "./AppMain";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    );
  }
}

export default App;
