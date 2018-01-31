import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BlogPostDetail from '../app/containers/BlogPostDetail';

describe('Test BlogPostDetail', () => {
  it('should render BlogPostDetail correctly', () => {
    const detail = renderer
      .create(<BlogPostDetail
        navigation={{
            state: {
              params: {
                postUrl:
                  'http://engineering.invisionapp.com/post/painless-microservices-migration/',
              },
            },
          }}
      />)
      .toJSON();
    expect(detail).toMatchSnapshot();
  });
});
