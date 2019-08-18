import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import SearchBar from './components/SearchBar';
import api from './api/api';

class App extends React.Component {
  state = {
    posts: [],
  }

  handleSearch = (regExp) => {
    api.getNodes('https://didacbigorda.com', '.post-list li')
      .then((postsList) => {
        const filteredPosts = postsList.filter((post) => {
          return post.querySelector('.post-link').innerText.match(regExp) || post.querySelector('.post-meta').innerText.match(regExp)
        })

        this.setState(({prevState}) => ({
          posts: filteredPosts,
        }));
      })
  }

  resetSearch = () => {
    this.setState(({prevState}) => ({
      posts: [],
    }));
  }

  render() {
    return (
      <div className='home'>
        < SearchBar search={this.handleSearch} resetSearch={this.resetSearch} />
        { this.state.posts && <PostsList posts={this.state.posts} /> }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));