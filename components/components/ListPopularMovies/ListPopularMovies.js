import React, { Component } from 'react';
import {
  Text, View, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Content, Spinner } from 'native-base';

import { listMovies, addMovies } from '../../../redux/actions/movies-actions';
import styles from './styles';

class ListPopularMovies extends Component {
  static isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    const paddingToBottom = 2;
    return layoutMeasurement.height + contentOffset.y
    >= contentSize.height - paddingToBottom;
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { listMovies } = this.props;
    listMovies();
  }

  static getCover(movie) {
    if (!movie) {
      return null;
    }

    return (
      <Image
        style={{ flex: 1 }}
        source={{ uri: `http://image.tmdb.org/t/p/original${movie.poster_path}` }}
      />
    );
  }

  static getList(movies) {
    if (movies.length <= 0) {
      return null;
    }

    const result = [];
    for (let i = 0; i < movies.length; i += 1) {
      result.push(
        <Image
          key={i}
          style={{
            backgroundColor: '#fff', width: 92, height: 140, marginTop: 30,
          }}
          source={{ uri: `http://image.tmdb.org/t/p/w92${movies[i].poster_path}` }}
        />,
      );
    }

    return result;
  }

  getSpinner() {
    const {
      loadingNewPage
    } = this.props;

    if (loadingNewPage) {
      return <Spinner color='white' />;
    }

    return null;
  }

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
            {ListPopularMovies.getCover(movies[0])}
          </View>
          <Text style={{
            marginTop: 30, color: '#fff', fontSize: 20, fontWeight: '700',
          }}
          >
            Filmes Mais Populares
          </Text>
          <View style={styles.list}>
            {ListPopularMovies.getList(movies)}
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ listMovies, addMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPopularMovies);
