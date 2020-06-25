import React from 'react';
//import { Redirect } from 'react-router-dom';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    if(!this.props.history) {
      console.log("history doesn't exist");
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let path = `/search?q=${this.query.value}`;
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    this.props.history.push(path);
  }

  render(){
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" ref={(input) => this.query = input} required/>
        <button style={{color: 'white'}} type="submit" className="search-button">Search </button>
      </form>
    );
  }
};


export default SearchForm;
