import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

class Search extends Component {
    state = {
        books: []
    }

    removeBook = (bookId) => {
        API.deleteBook(bookId);
    }

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState(
                    { books: res.data }
                );
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <SearchBar searchBook={this.searchBook} />
                <div className="card-columns">
                    {this.state.books.map(book => {
                        return (
                            <Card key={book.bookId} save={this.deleteBook} {...book} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search;