import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

const titleStyle = {
    'text-align': 'center'
}

class Search extends Component {
    state = {
        books: []
    }

    onClickFunc = (bookId) => {
        API.deleteBook(bookId);
        window.location = "/saved";
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
                <h3 style={titleStyle}>Your Saved Books</h3>
                <hr></hr>
                <div className="card-columns">
                    {this.state.books.map(book => {
                        return (
                            <Card key={book.bookId} onClickFunc={this.onClickFunc} text="Remove" {...book} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search;