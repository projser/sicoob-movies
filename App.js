import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import ListPopularMovies from './components/components/ListPopularMovies/ListPopularMovies';
import store from './redux/store';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ListPopularMovies,
  },
});

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
