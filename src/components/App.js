import React from 'react';
import Posts from "./posts";


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        query: '',
        posts: [],
        error: false,
        loading: false,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.uploadPosts = this.uploadPosts.bind(this);

  }

  uploadPosts(){
      fetch(`https://www.reddit.com/r/${this.state.query}/hot.json`)
          .then(res => {
              this.setState({loading: true});
              return res.json()
          })
          .then(body => this.setState({posts: body.data.children, loading: false, error: false}))
          .catch(res => {
              if(!res.ok){
                return this.setState({error: true, posts: []})
              }
          })
  }

  handlerChange(event){
      return this.setState({query: event.target.value});
  }

  render(){
    return(
        <React.Fragment>
            <input onChange={this.handlerChange} type="text"/>
            <button onClick={() => this.uploadPosts()}>Показать</button>
            <Posts
                error={this.state.error}
                loading={this.state.loading}
                posts={this.state.posts}
            />
        </React.Fragment>
    )
  }

}
export default App;
