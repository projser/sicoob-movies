import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import ListPopularMovies from './components/components/ListPopularMovies/ListPopularMovies';
import store from './redux/store';
import ShowMovieDetails from './components/components/ShowMovieDetails/ShowMovieDetails';

const AppNavigator = createStackNavigator(
  {
    Home: ListPopularMovies,
    MovieDetails: ShowMovieDetails,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#fff',
    },
  },
);

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
