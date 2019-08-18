import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import api from './api/api';

class App extends React.Component {
  state = {
    posts: [],
  }

  getWebsite = () => {
    api.getNodes('https://didacbigorda.com', '.post-list li')
      .then((postsList) => {
        // const mappedList = postsList.map((el) => el.innerText); // Not useful anymore
        this.setState(({prevState}) => ({
          posts: postsList,
        }));
      })
  }

  render() {
    return (
      <div className='home'>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.getWebsite}>Search</button>
        { this.state.posts && <PostsList posts={this.state.posts} /> }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
)