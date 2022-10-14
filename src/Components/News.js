import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstletter=((string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  })

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title= `${this.capitalizeFirstletter(this.props.category)} - NewsMatters`;
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4f02bbfc81284ef38fb3e9dd5dd44059&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.props.setProgress(30)
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(70)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults
    });
    this.props.setProgress(100)

  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4f02bbfc81284ef38fb3e9dd5dd44059&page=1&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({ articles: parseData.articles });
    this.updateNews();
  }

  // handleNext = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4f02bbfc81284ef38fb3e9dd5dd44059&page=${
  //   //   this.state.page + 1
  //   // }&pagesize=${this.props.pageSize}`;
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parseData.articles,
  //   // });
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePrev = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4f02bbfc81284ef38fb3e9dd5dd44059&page=${
  //   //   this.state.page - 1
  //   // }&pagesize=${this.props.pageSize}`;
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   // });
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async() => {
   this.setState({page: this.state.page + 1})
    
    const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=4f02bbfc81284ef38fb3e9dd5dd44059&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults
    });
  
};

  render() {
    return (
      <div className="container my3">
        <div className="h1 text-center">News Matters - Top {this.capitalizeFirstletter(this.props.category)} Headlines </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  source={element.source.name}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
          </div>
        
        </InfiniteScroll>
        <div className="container my-2 d-flex justify-content-between">
          {/* <button
            disabled={this.state.page < 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button> */}
        </div>
      </div>
    );
  }
}

export default News;
