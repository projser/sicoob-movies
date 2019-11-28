import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ListPopularMovies } from './ListPopularMovies';
import { Text } from 'react-native';


Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    movies: [{title: ''}],
    listMovies: jest.fn(),
    listGenres: jest.fn(),
  }

  const enzymeWrapper = shallow(<ListPopularMovies {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('List Popular Movies', () => {
    it('should render components', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('TouchableOpacity').first().contains(
         <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>The most popular:</Text>
      )).toEqual(true);

      // expect(enzymeWrapper.find('h1').text()).toBe('todos')

      // const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      // expect(todoInputProps.newTodo).toBe(true)
      // expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    });
  });
});