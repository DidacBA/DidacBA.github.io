import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';

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
    getWebAsync('https://didacbigorda.com');
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

function getWebAsync(website) {
  fetch(website)
    .then((response) => {
      return response.text()
    })
    .then((html) => {
      let parser = new DOMParser();

      let doc = parser.parseFromString(html, "text/html");
      console.log(doc.querySelector('.post-list'));
    })
    .catch((err) => {  
      console.log('Failed to fetch page: ', err);  
  });
}

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
)