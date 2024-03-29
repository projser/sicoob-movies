import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  recomendation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 600,
  },
  recomendationTitle: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: Dimensions.get('window').width,
    padding: 20,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    marginTop: 30,
    justifyContent: 'space-around',
  },
  listItem: {
    width: 92,
    flex: 0.3,
    flexWrap: 'wrap',
  },
});
