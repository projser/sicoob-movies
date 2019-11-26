import { StyleSheet } from 'react-native';

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
