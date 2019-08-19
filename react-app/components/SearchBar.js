import React from 'react'

export default function SearchBar(props) {

  const handleChange = (e) => {
    if (e.target.value === '') {
      const { resetSearch } = props;
      resetSearch();
    } else {
      const pattern = `${e.target.value}`;
      const searchRegExp = new RegExp(pattern, "i");
      const { search } = props;
      search(searchRegExp);
    }
  }

  const styles = {
    input: {
      width: '98%',
      height: '30px',
      margin: '0px 0px 20px 0px'
    }
  }

  return (
    <>
      <input type="text" placeholder="Search Posts" 
          onChange={handleChange} style={styles.input} />
    </>
  )
}
