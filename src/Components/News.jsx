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
        if (this.state.articles == null) {
            return <></>;
        }
        if (this.state.loading === true) {
            return (
                <>
                    <Spinner />
                </>
            );
        }
        return (
            <>
                <div className="container ">
                    <h1 className="text-center">
                        <u>Top Headlines</u>
                    </h1>
                    <div className="row">
                        {this.state.articles.map((e) => {
                            return (
                                <div key={e.title} className="col-md-4">
                                    <NewsItem
                                        title={e.title.slice(0, 50)}
                                        description={e.description}
                                        imageUrl={e.urlToImage}
                                        key={e.url}
                                        newsUrl={e.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container page-navigation d-flex justify-content-between p-3">
                    <button
                        disabled={this.state.currentPage === 1}
                        className="btn btn-dark"
                        onClick={this.handlePreviousBtnClick}
                    >
                        <b>&larr; Previous</b>
                    </button>
                    <button
                        disabled={
                            this.utility.totalPageCount <=
                            this.state.currentPage
                        }
                        className="btn btn-dark"
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
