import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import api from './api/api';

class App extends React.Component {
  state = {
    count: 0,
    showTest: false,
  }

  handleClick = () => {
    this.setState(({ showTest }) => ({
      showTest: !showTest
    }));
  };

  getWebsite = () => {
    api.getWebAsync('https://didacbigorda.com')
      .then((postsList) => {
        const mappedList = postsList.map((el) => el.innerText);
        this.setState(({prevState}) => ({
          posts: mappedList,
        }));
      })
  }

  render() {
    return (
      <div className='home'>
        <button onClick={this.handleClick}>Show/Hide Test</button>
        <button onClick={this.getWebsite}>Get Website</button>
        {this.state.showTest && <PostsList />}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
)