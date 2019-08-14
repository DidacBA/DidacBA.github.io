import React from 'react';
import ReactDOM from 'react-dom';

export default class PostsList extends React.Component {
  render() {
    const ulStyle = {
      'background-color': '#fdfdfd',
      'z-index': '10000',
    };
    return (
      <div style={ulStyle}>
        <h2 className="post-list-heading">Search Results:</h2>
        <ul className="post-list">
          <li>
            <span className="post-meta">Post Test</span>
            <h3>
              <a className="post-link" href="">Test post title</a>
            </h3>
          </li>
        </ul>
      </div>
    )
  }
} 