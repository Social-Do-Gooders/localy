import React, {Component} from "react";
import {getScienceArticles} from '../newsapi/api';
import ArticleList from './ArticleList'

class Science extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {
    try {
      const response = await getScienceArticles();
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
          Science articles
        </header>
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </div>
    );
  }
}

export default Science;
