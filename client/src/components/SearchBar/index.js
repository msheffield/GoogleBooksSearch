import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {

    state = {
        search: ''
    };

    updateSearch = (element) => {
        this.setState({
            search: element.target.value
        });
    }

    handleSubmit = (element) => {
        element.preventDefault();
        this.props.searchBook(this.state.search);
        this.setState({ search: '' });
    };


    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <h5>Find a Book</h5>
                </div>
                <div className="col-md-8">
                    <form onSubmit={this.handleSubmit}>
                        <div className='input-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter title of book to search'
                                name='search'
                                value={this.state.search}
                                onChange={this.updateSearch}
                            />
                            <button
                                className='btn btn-primary'
                                type='submit'
                                onClick={this.handleSubmit}>
                                Search
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;