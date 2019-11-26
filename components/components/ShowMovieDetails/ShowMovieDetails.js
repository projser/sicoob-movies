import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Content, Spinner } from 'native-base';

import { listMovies, addMovies, getMovieAction } from '../../../redux/actions/movies-actions';
import styles from './styles';

class ShowMovieDetails extends Component {
  getCover() {
    const { currentMovie } = this.props;
    if (!currentMovie) {
      return null;
    }

    return (
      <Image
        style={{ flex: 1 }}
        source={{ uri: `http://image.tmdb.org/t/p/original${currentMovie.poster_path}` }}
      />
    );
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
    // eslint-disable-next-line no-shadow
    const { currentMovie, genres } = this.props;
    let movieGenres = '';

    for (let i = 0; i < currentMovie.genre_ids.length; i += 1) {
      for (let j = 0; j < genres.genres.length; j += 1) {
        if (currentMovie.genre_ids[i] === genres.genres[j].id) {
          movieGenres += genres.genres[j].name + ', ';
          break;
        }
      }
    }

    movieGenres = movieGenres.substr(0, movieGenres.length - 2);
    return (
      <Container style={styles.container}>
        <Content style={{ flex: 1, alignSelf: 'stretch' }}>
          <View style={styles.recomendation}>
            {this.getCover()}
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: '#222'}}>
            <Text style={{
              marginTop: 30, color: '#fff', fontSize: 20, fontWeight: '700',
            }}
            >
              {currentMovie.title}
            </Text>
            <Text style={{ color: '#fff', marginTop: 10 }}>
              Release Date: {currentMovie.release_date}
            </Text>
            <Text style={{ color: '#fff', marginTop: 10 }}>
              Genres: {movieGenres}
            </Text>
            <Text style={{ color: '#fff', marginTop: 10, marginBottom: 20 }}>
              Overview: {currentMovie.overview}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  currentMovie: store.moviesState.currentMovie,
  genres: store.genresState.genres,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ listMovies, addMovies, getMovieAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovieDetails);
