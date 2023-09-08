import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
    render() {
        return (
            <>
                <div className="card" style={{ width: 18 + "rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <Link to={`${this.props.Link}`}>Go somewhere</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;
