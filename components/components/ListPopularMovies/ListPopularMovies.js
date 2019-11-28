import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Content, Spinner } from 'native-base';

import { listMovies, addMovies, getMovieAction } from '../../../redux/actions/movies-actions';
import { listGenres } from '../../../redux/actions/genre-actions';
import styles from './styles';

export class ListPopularMovies extends Component {
  static isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 2;
    return layoutMeasurement.height + contentOffset.y
    >= contentSize.height - paddingToBottom;
  }

  getSpinner = () => {
    const {
      loadingNewPage,
    } = this.props;

    if (loadingNewPage) {
      return <Spinner color="white" />;
    }

    return null;
  }

  componentDidMount = () => {
    // eslint-disable-next-line no-shadow
    const { listMovies, listGenres } = this.props;
    listMovies();
    listGenres();
  }

  getCover = (movie) => {
    // eslint-disable-next-line no-shadow
    const { getMovieAction, navigation } = this.props;
    if (!movie) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          getMovieAction(movie);
          navigation.navigate('MovieDetails', { title: movie.title });
        }}
        style={{ flex: 1 }}
      >
        <Image
          style={{ flex: 1 }}
          source={{ uri: `http://image.tmdb.org/t/p/original${movie.poster_path}` }}
        />
        <View style={styles.recomendationTitle}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>The most popular:</Text>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: '900' }}>{movie.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  getList = (movies) => {
    // eslint-disable-next-line no-shadow
    const { getMovieAction, navigation } = this.props;

    if (movies.length <= 0) {
      return null;
    }

    const result = [];
    for (let i = 0; i < movies.length; i += 1) {
      result.push(
        <TouchableOpacity key={i} onPress={() => { getMovieAction(movies[i]); navigation.navigate('MovieDetails', { title: movies[i].title }); }}>
          <Image
            style={{
              backgroundColor: '#fff', width: 92, height: 140, marginTop: 30,
            }}
            source={{ uri: `http://image.tmdb.org/t/p/w92${movies[i].poster_path}` }}
          />
        </TouchableOpacity>,
      );
    }

    return result;
  }

  static navigationOptions = {
    title: 'Sicoob Movies',
  };

  render() {
    const {
      // eslint-disable-next-line no-shadow
      movies, loading, addMovies, currentPage, shouldAddState,
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Container style={styles.container}>
        <Content
          onScroll={({ nativeEvent }) => {
            if (ListPopularMovies.isCloseToBottom(nativeEvent) && shouldAddState) {
              addMovies(currentPage);
            }
          }}
          scrollEventThrottle={400}
          style={{ flex: 1, alignSelf: 'stretch' }}
        >
          <View style={styles.recomendation}>
            {this.getCover(movies[0])}
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{
              marginTop: 30, color: '#fff', fontSize: 20, fontWeight: '700',
            }}
            >
              Popular movies
            </Text>
            <View style={styles.list}>
              {this.getList(movies)}
            </View>
          </View>
          {this.getSpinner()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.moviesState.movies,
  loading: store.moviesState.loading,
  currentPage: store.moviesState.currentPage,
  shouldAddState: store.moviesState.shouldAddState,
  loadingNewPage: store.moviesState.loadingNewPage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  listMovies, addMovies, getMovieAction, listGenres,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPopularMovies);
