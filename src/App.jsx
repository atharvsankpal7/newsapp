import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
    state = {
        newsCache: {},
    };
    render() {
        return (
            <Router>
                <NavBar />

                <Routes>
                    <Route
                        path="/"
                        element={<News key="general" />}
                        cache={this.state.newsCache}
                    />

                    <Route
                        path="/business"
                        element={
                            <News
                                key="business"
                                category={"business"}
                                cache={this.state.newsCache}
                            />
                        }
                    />
                    <Route
                        path="/entertainment"
                        element={
                            <News
                                key="entertainment"
                                category={"entertainment"}
                                cache={this.state.newsCache}
                            />
                        }
                    />
                    <Route
                        path="/health"
                        element={
                            <News
                                key="health"
                                category={"health"}
                                cache={this.state.newsCache}
                            />
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <News
                                key="science"
                                category={"science"}
                                cache={this.state.newsCache}
                            />
                        }
                    />
                    <Route
                        path="/sports"
                        element={
                            <News
                                key="sports"
                                category="sports"
                                cache={this.state.newsCache}
                            />
                        }
                    />
                    <Route
                        path="/technology"
                        element={
                            <News
                                key="technology"
                                category={"technology"}
                                cache={this.state.newsCache}
                            />
                        }
                    />
                </Routes>
            </Router>
        );
    }
}
