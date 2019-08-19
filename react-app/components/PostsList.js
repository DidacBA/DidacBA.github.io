import React from 'react';

export default function PostsList(props) {

  const styles = {
    ul: {
      'background-color': '#fdfdfd',
      'z-index': '10000',
    }
  }

  return (
    <div style={styles.ul}>
      <ul className="post-list">
        {props.posts.map((post, index) =>
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