import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </>
    )
  }
}

export default News