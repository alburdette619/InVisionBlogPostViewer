import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BlogPostList from '../app/containers/BlogPostList';

describe('Test BlogPostList', () => {
  it('should render BlogPostList correctly', () => {
    const list = renderer
      .create(<BlogPostList
        navigation={{
          navigate: jest.fn(),
          }}
      />)
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
