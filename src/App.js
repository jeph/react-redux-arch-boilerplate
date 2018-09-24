import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Home from 'screens/Home/ui/screen';

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Home/>
        </div>
      </Provider>
    );
  }
}

export default App;
