import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
    render() {
        let defaultImageUrl =
            "https://img.freepik.com/premium-vector/breaking-news-world-map-background_213860-471.jpg";
        let {
            title,
            description,
            imageUrl = "https://img.freepik.com/premium-vector/breaking-news-world-map-background_213860-471.jpg",
            newsUrl,
        } = this.props;

        imageUrl = imageUrl == null ? defaultImageUrl : imageUrl;
        description =
            description == null
                ? "Click read more to see more about this news"
                : description;
        return (
            <div
                className={`card mx-4 my-4  p-2 border border-${this.props.textColor} bg-${this.props.colorMode} text-${this.props.textColor}`}
                style={{ width: 18 + "rem", borderRadius : 10+"px"}}
            >
                <img src={imageUrl} className="card-img-top" alt="bruh" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description.length < 75
                            ? description
                            : description.slice(0, 75) + "... "}
                    </p>

                    <Link
                        className=" btn btn-primary "
                        target="_blank"
                        to={newsUrl}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        );
    }
}

export default NewsItem;
