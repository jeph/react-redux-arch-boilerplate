import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
// inject bootstrap
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// Screens
import Home from 'screens/Home/ui/screen';

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <div className="bg-primary">
          <Home/>
        </div>
      </Provider>
    );
  }
}

export default App;
