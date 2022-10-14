import React, { Component } from "react";
import flag from "./flag.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, date } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl ?flag:imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"><strong>Source:</strong> {source} <strong>Date:</strong> {new Date(date).toDateString()}</small></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary btn-dark" 
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
