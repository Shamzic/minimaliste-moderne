import React, { Component } from 'react';
import axios from 'axios';
import Post from './post'

class PostsList extends Component {

  state = {
    posts : []
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {
        this.setState({posts: res.data})
      }
    )
  }

  render() {

    var infos = {
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    }
    return (
      <React.Fragment>
        <div style={{marginTop: '50px'}}>Liste des articles</div>
        <Post info={infos}></Post>
        <Post info={infos}></Post>
        <Post info={infos}></Post>
        <Post info={infos}></Post>
      </React.Fragment>
    );
  }

}

export default PostsList;
