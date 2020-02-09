import React from 'react';
import Posts from "./posts";


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        query: '',
        posts: []
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.uploadPosts = this.uploadPosts.bind(this);

  }

  uploadPosts(){
      fetch(`https://www.reddit.com/r/${this.state.query}/hot.json`)
          .then(res => res.json())
          .then(body => this.setState({posts: body}))
  }

  handlerChange(event){
      return this.setState({query: event.target.value});
  }

  render(){
    return(
        <React.Fragment>
            <input onChange={this.handlerChange} type="text"/>
            <button onClick={() => this.uploadPosts()}>Получить</button>
            <Posts posts={this.state.posts} />
        </React.Fragment>
    )
  }

}
export default App;
