import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.handleClick}>Increment counter</button>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
)