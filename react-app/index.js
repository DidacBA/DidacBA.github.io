import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import SearchBar from './components/SearchBar';
import api from './api/api';

class App extends React.Component {
  state = {
    unfilteredPosts: null,
    posts: null,
  }

  handleSearch = (regExp) => {
    // Condition to avoid constant fetch calls
    // Searches after first are performed over results of first call

    if (this.state.posts === null) {
      api.getNodes('https://didacbigorda.com', '.post-list li')
        .then((postsList) => {
          const filteredPosts = postsList.filter((post) => {
            return post.querySelector('.post-link').innerText.match(regExp) || post.querySelector('.post-meta').innerText.match(regExp)
          })
  
          this.setState(({prevState}) => ({
            unfilteredPosts: postsList, 
            posts: filteredPosts,
          }));
        })
    } else {
      const filteredPosts = this.state.unfilteredPosts.filter((post) => {
        return post.querySelector('.post-link').innerText.match(regExp) || post.querySelector('.post-meta').innerText.match(regExp)
      })

      this.setState(({prevState}) => ({
        posts: filteredPosts,
      }))
    }
  }

  resetSearch = () => {
    // Reset to value other than null to avoid refetching resources in handleSearch

    this.setState(({prevState}) => ({
      posts: '',
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