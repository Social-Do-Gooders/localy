import React, {Component} from "react";
import {getTechArticles} from '../newsapi/api';
import ArticleList from './ArticleList'

class Tech extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {
    try {
      const response = await getTechArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  render() {
    const { articles, apiError } = this.state;
    return (
      <div>
        <header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Technology articles
        </header>
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </div>
    );
  }
}

export default Tech;
