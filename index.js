import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BlogPostList from './app/containers/BlogPostList';
import BlogPostDetail from './app/containers/BlogPostDetail';

const BlogViewer = StackNavigator({
  BlogPostList: { screen: BlogPostList },
  BlogPostDetail: { screen: BlogPostDetail },
});

AppRegistry.registerComponent('InVisionBlogViewer', () => BlogViewer);
