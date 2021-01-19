/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
// import { Header, Colors, } from 'react-native/Libraries/NewAppScreen';

// import Counter from './src/components/screens/Counter'
import UsersList from './src/components/users/UserList';

// Imports: Redux Store
import { store } from './src/store/store';
import { Router, Scene } from 'react-native-router-flux';
import AddUser from './src/components/users/AddUser';
import MapPage from './src/components/screens/map/MapPage';
import Flexbox from './src/components/screens/flexboxTutorials/FlexboxTutorial';
import SearchLocationMap from './src/components/screens/map/SearchLocationMap';
import HeaderFlexbox from './src/components/screens/flexboxTutorials/flexboxHeader';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <StatusBar barStyle="dark-content" /> */}
          {/* <Counter /> */}
          {/* <UsersList /> */}
          <Scene key="root">
            <Scene
              key="usersList"
              // component={HeaderFlexbox}
              component={UsersList}
              title="Users List"
              hideNavBar={true}
              initial
            />
            <Scene
              key="addUser"
              component={AddUser}
              title="Add User"
            />

            <Scene
              key="viewMap"
              component={MapPage}
              title="Our Map"
              
            />

            <Scene
              key="searchMap"
              component={SearchLocationMap}
              hideNavBar={true}
              // title="Search Location"
            />

          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
