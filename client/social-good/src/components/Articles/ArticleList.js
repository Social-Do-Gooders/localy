import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '../grid/Card';
import image from '../../images/carousel/placeholder1.jpg';

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: 'none',
    color: 'black'
  },
}));

const ArticleItem = (props) => {
  const { article } = props;
  const classes = useStyles();

  return (
    <div>
      <a className={classes.a} href={article.url} target="_blank">
        <Card feature={article.title} imgSrc={article.urlToImage == null ? image : article.urlToImage} title={article.title}/>
      </a>
    </div>
  );
}


const ArticleList = (props) => {
  return (
    <div className='app-container' >
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
      {props.articles.map((article, index) =>  (
       <div className='col'> <ArticleItem article={article} key={article.title + index}/> </div>

      ))}
      </div>
    </div>
  );
};

export default ArticleList;