import React, { Component } from 'react'

export default class SearchBar extends Component {

  handleChange = (e) => {
    if (e.target.value === '') {
      const { resetSearch } = this.props;
      resetSearch();
    } else {
      const pattern = `${e.target.value}`;
      const searchRegExp = new RegExp(pattern, "i");
      const { search } = this.props;
      search(searchRegExp);
    }
  }

  styles = {
    input: {
      width: '100%',
      height: '30px',
      margin: '0px 0px 20px 0px'
    }
  }

  render() {
    return (
      <>
        <input type="text" placeholder="Search Posts" 
            onChange={this.handleChange} style={this.styles.input} />
      </>
    )
  }
}
