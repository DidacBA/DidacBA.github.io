import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
  }

  reactify() {
    document.body.innerHTML = 'Hola';
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  getWebsite = () => {
    getWebAsync('https://didacbigorda.com');
  }

  render() {
    return (
      <>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.handleClick}>Increment counter</button>
        <button onClick={this.reactify}>REACTIFY</button>
        <button onClick={this.getWebsite}>Get Website</button>
      </>
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