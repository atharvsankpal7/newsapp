import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
    static defaultProps = {
        country: "us",
        category: "sports",
        cache: {},
    };
    static propTypes = {
        category: PropTypes.string,
    };
    constructor() {
        super();
        this.state = {
            articles: null,
            loading: true,
            currentPage: 1,
            btnAvailable: true,
        };
        this.utility = {
            totalArticleCount: 0,
            totalPageCount: 0,
            maxPageSize: 12,
        };
    }
    urlFetch = async (pageNumber) => {
        this.setState({ loading: true });
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cab1ea2a35c64b64a450bd6a2f4157ea&page=${pageNumber}&pageSize=${this.utility.maxPageSize}`;

        // memozing the data fetching processing for current session
        if (this.props.cache[URL]) {
            this.setState({ articles: this.props.cache[URL].articles });
            this.setState({ loading: false });

            return this.props.cache[URL];
        } else {
            let data = await fetch(URL);
            let parsedData = await data.json();
            this.props.cache[URL] = parsedData;
            this.setState({ articles: parsedData.articles });
            this.setState({ loading: false });

            return parsedData;
        }
    };
    async componentDidMount() {
        let parsedData = await this.urlFetch(this.state.currentPage);
        this.utility.totalArticleCount = parsedData.totalResults;
        this.utility.totalPageCount =
            this.utility.totalArticleCount / this.utility.maxPageSize;
    }
    handleNextBtnClick = async () => {
        await this.urlFetch(this.state.currentPage + 1);
        this.setState({
            currentPage: this.state.currentPage + 1,
        });
    };
    handlePreviousBtnClick = async () => {
        await this.urlFetch(this.state.currentPage - 1);
        this.setState({
            currentPage: this.state.currentPage - 1,
        });
    };
    render() {
        if (this.state.loading === true || this.state.articles == null) {
            return (
                <>
                    <Spinner />
                </>
            );
        }
        return (
            <>
                <div
                    className={`container text-${this.props.textColor} .bg-dark .bg-gradient`}
                >
                    <h1 className="text-center">
                        <u style={{textTransform:"capitalize"}}>  {this.props.category}</u>
                    </h1>
                    <div className="row">
                        {this.state.articles.map((e, index) => {
                            return (
                                <div key={index} className="col-md-4">
                                    <NewsItem
                                        title={e.title.slice(0, 50)}
                                        description={e.description}
                                        imageUrl={e.urlToImage}
                                        newsUrl={e.url}
                                        colorMode={this.props.colorMode}
                                        textColor={this.props.textColor}
                                        author = {e.author}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr
                    style={{
                        color:
                            this.props.textColor === "dark"
                                ? "black"
                                : "white    ",
                    }}
                />
                <div className="container page-navigation d-flex justify-content-between p-3">
                    <button
                        disabled={this.state.currentPage === 1}
                        className={`btn btn-${this.props.colorMode} border-${this.props.textColor}`}
                        onClick={this.handlePreviousBtnClick}
                    >
                        <b>&larr; Previous</b>
                    </button>
                    <button
                        disabled={
                            this.utility.totalPageCount <=
                            this.state.currentPage
                        }
                        className={`btn btn-${this.props.colorMode} border-${this.props.textColor}`}
                        onClick={this.handleNextBtnClick}
                    >
                        <b>&rarr; Next</b>
                    </button>
                </div>
            </>
        );
    }
}

export default News;
