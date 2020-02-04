import React, { Component } from "react";
import SaveButton from "../SaveButton";
import "./style.css";

class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title}</h4>
                </div>
                <img className="card-img-top" src={this.props.image} alt={this.props.title} />
                <div className="card-body">
                    <h6 className="card-title">{this.props.author}</h6>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className="card-footer">
                    <SaveButton {...this.props} />
                </div>
            </div>
        )
    }

}

export default Card;