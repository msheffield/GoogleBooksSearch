import React, { Component } from "react";


class SaveButton extends Component {

    render() {
        return (
            <div className="btnContainer">
                <button
                    type='button'
                    className='btn btn-info'
                    onClick={() => {
                        let bookInfo = {
                            bookId: this.props.bookId,
                            title: this.props.title,
                            author: this.props.author,
                            description: this.props.description,
                            image: this.props.image,
                            link: this.props.link
                        }
                        this.props.onClickFunc(bookInfo);
                    }
                    }>
                    {this.props.text}
            </button>
            </div>
        )
    }

}

export default SaveButton;