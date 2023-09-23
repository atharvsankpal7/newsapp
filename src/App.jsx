import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
    constructor() {
        super();
        document.body.style.backgroundColor = "black";
    }
    toggleTheme = () => {
        this.setState(() => ({
            colorMode: this.state.colorMode === "light" ? "dark" : "light",
            textColor: this.state.textColor === "dark" ? "light" : "dark",
        }));

        document.body.style.backgroundColor =
            this.state.colorMode === "dark" ? "white" : "black";
    };
    state = {
        newsCache: {},
        colorMode: "dark",
        textColor: "light",
    };
    render() {
        return (
            <Router>
                <NavBar
                    textColor={this.state.textColor}
                    colorMode={this.state.colorMode}
                    toggleTheme={this.toggleTheme}
                />

                <Routes>
                    <Route
                        path="/"
                        element={<News key="general" />}
                        cache={this.state.newsCache}
                        textColor={this.state.textColor}
                        colorMode={this.state.colorMode}
                        toggleTheme={this.toggleTheme}
                    />

                    <Route
                        path="/business"
                        element={
                            <News
                                key="business"
                                category={"business"}
                                cache={this.state.newsCache}
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
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
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
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
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
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
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
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
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
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
                                textColor={this.state.textColor}
                                colorMode={this.state.colorMode}
                                toggleTheme={this.toggleTheme}
                            />
                        }
                    />
                </Routes>
            </Router>
        );
    }
}
