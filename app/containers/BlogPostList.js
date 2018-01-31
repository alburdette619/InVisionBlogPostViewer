import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

const dataUrl = 'https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0';

class BlogPostList extends Component {
  static navigationOptions = () => ({
    title: 'InVision Engineering Blog',
  });

  state = {
    posts: [],
  };

  componentWillMount() {
    this.getBlogPostData();
  }

  async getBlogPostData() {
    let responseJson = {};
    try {
      const response = await fetch(dataUrl);
      responseJson = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ posts: responseJson.rss.channel.item });
    }
  }

  renderBlogPostItem(item) {
    const { item: { title, pubDate, link } } = item;
    const readableDate = moment(pubDate).format('LLL');
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity onPress={() => navigate('BlogPostDetail', { postUrl: link })}>
        <View style={{ borderBottomWidth: 1, paddingHorizontal: 4, paddingVertical: 8 }}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <Text style={{ fontSize: 10 }}>{readableDate}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.posts || []}
        renderItem={item => this.renderBlogPostItem(item)}
        keyExtractor={item => item.title}
      />
    );
  }
}

BlogPostList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BlogPostList;
