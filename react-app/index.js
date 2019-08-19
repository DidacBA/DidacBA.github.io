import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PostsList from './components/PostsList';
import SearchBar from './components/SearchBar';
import api from './api/api';

function App() {
  const [posts, setPosts] = useState(null);
  const [unfilteredPosts, setUnfilteredPosts] = useState(null);

  const handleSearch = (regExp) => {
    // Condition to avoid constant fetch calls
    // Searches after first are performed over results of first call

    if (posts === null) {
      api.getNodes('https://didacbigorda.com', '.post-list li')
        .then((postsList) => {
          const filteredPosts = postsList.filter((post) => {
            return post.querySelector('.post-link').innerText.match(regExp) || post.querySelector('.post-meta').innerText.match(regExp)
          })

          setPosts(filteredPosts);
          setUnfilteredPosts(postsList);
        })
    } else {
      const filteredPosts = unfilteredPosts.filter((post) => {
        return post.querySelector('.post-link').innerText.match(regExp) || post.querySelector('.post-meta').innerText.match(regExp)
      })

      setPosts(filteredPosts);
    }
  }

  const resetSearch = () => {
    // Reset to value other than null to avoid refetching resources in handleSearch

    setPosts('');
  }

  return (
    <div className='home'>
      < SearchBar search={handleSearch} resetSearch={resetSearch} />
      { posts && <PostsList posts={posts} /> }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'));