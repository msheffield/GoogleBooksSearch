import React, { Component } from "react";


class Card extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-title">{this.props.author}</h6>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        )
    }

}

export default Card;