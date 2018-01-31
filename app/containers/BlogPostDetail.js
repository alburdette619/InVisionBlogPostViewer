import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';

const BlogPostDetail = (props) => {
  const { postUrl } = props.navigation.state.params;
  return (<WebView source={{ uri: postUrl }} />);
};


BlogPostDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BlogPostDetail;
