import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import NewsItem from "./Components/NewsItem";

export default class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />

                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/about" element={<NewsItem />} />
                </Routes>
            </Router>
        );
    }
}
