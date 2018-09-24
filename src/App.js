import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';
// inject bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Screens
import Home from 'screens/Home/ui/screen';
import About from 'screens/About/ui/screen';

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
          <div className="bg-primary h-100 w-100">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" exact={true} component={About} />
              </Switch>
            </BrowserRouter>
          </div>
          </Provider>
    );
  }
}

export default App;
