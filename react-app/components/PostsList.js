import React from 'react';

export default class PostsList extends React.Component {

  render() {
    const ulStyle = {
      'background-color': '#fdfdfd',
      'z-index': '10000',
    };
    const posts = this.props.posts;
    return (
      <div style={ulStyle}>
        <ul className="post-list">
          {posts.map((post, index) =>
          <li>
            <span class="post-meta">{post.querySelector('.post-meta').innerText}</span>
            <h3>
              <a 
                key={index} 
                class="post-link" 
                href={'https://didacbigorda.com' + post.querySelector('.post-link').getAttribute('href')}
              >{post.querySelector('.post-link').innerText}</a>
            </h3>
          </li>
          )}
        </ul>
      </div>
    )
  }
} 