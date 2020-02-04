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
                        this.props.save(bookInfo);
                    }
                    }>
                    Save
            </button>
            </div>
        )
    }

}

export default SaveButton;