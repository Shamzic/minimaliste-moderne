import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    var { title, body} = this.props.info;

    return (
      <div>
        <h1>Titre : {title}</h1>
        <div>{body}</div>
      </div>
    );
  }

}

export default Post;
