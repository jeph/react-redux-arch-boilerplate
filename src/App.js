import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
// inject bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Screens
import Home from 'screens/Home/ui/screen';

class App extends PureComponent {

  render() {
    return (
        <div className="bg-primary h-100 w-100">
          <Provider store={store}>
              <Home/>
          </Provider>
        </div>
    );
  }
}

export default App;
