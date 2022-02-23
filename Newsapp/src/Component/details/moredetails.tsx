import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from './moredetails.module.css'
export const MoreDetails = () => {
  const { titel } = useParams<any>();
  const [articles, setArticles] = useState([]);
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
    const getNews = async () => {
      try {
        const Response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_NEWS_API_KEY_NAME}`)
     const articles = await Response.json()
     setArticles(articles.articles)
     setIsloading(false)  
      } catch (error) {}
    };
    getNews();
  }, []);
  return (

    <div >
      {isloading ? (<div> <Spinner animation="border" variant="success" /></div>) :(<div>
        {articles
        .filter((articel:any) => articel.author === titel)
        .map((articel: any, index) => {
          return (
            <div className={styles.container}>
              <h2 key={index}>{articel.title}</h2>
              <h4 key={index}>{articel.description}</h4> 
              <p key={index}>{articel.content}</p>
              <ul key={index}>
                <li>{articel.source.name}</li>
                <li>{articel.publishedAt}</li>
                <li>{articel.author}</li>
              </ul>
            </div>
          );
        })}
      </div>)}
      
    </div>
  );
};
