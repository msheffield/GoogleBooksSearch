import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

class Search extends Component {
    state = {
        books: []
    }

    saveBook = (event) => {
        event.preventDefault();
        API.saveBook();
    }

    searchBook = (query) => {
        API.searchBooks(query)
            .then(res => {
                let stateBooks = [];
                res.data.items.forEach(result => {
                    let book = {
                        bookId: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    stateBooks.push(book);
                    console.log(book);
                });
                this.setState(
                    {
                        books: stateBooks
                    }
                );
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div>
                <SearchBar searchBook={this.searchBook}/>
                <div className="card-columns">
                    {this.state.books.map(book => {
                        return (
                            <Card  key={book.bookId} {...book} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search;