import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import api from './api/api';

class App extends React.Component {
  state = {
    showTest: false,
    value: '',
  }

  getWebsite = () => {
    api.getWebAsync('https://didacbigorda.com')
      .then((postsList) => {
        const mappedList = postsList.map((el) => el.innerText);
        this.setState(({prevState}) => ({
          posts: mappedList,
        }));
      })
  }

  handleChange = (event) => {
    console.log('Hello')
    this.setState(({prevState}) => ({
      value: event.target.value,
    }));
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