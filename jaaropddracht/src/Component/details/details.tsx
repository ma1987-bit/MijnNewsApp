import styles from "./detail.module.css";
import { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themecontext";

const DetailsPage = () => {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const { mode } = useContext(ThemeContext);
  useEffect(() => {
    const getNews = async () => {
      try {
        const Response = await fetch(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=490f4dd1203744e29cfe33c625cf5ffe"
        );
        const articles = await Response.json();
        setArticles(articles.articles);
        setIsloading(false);
      } catch (error) {}
    };
    getNews();
  }, []);

  return (
      <>
    <div className={`${styles.dark}${mode === "light" ? styles.cardDark : ""}`}>
      <div className={styles.container}>
    {isloading ? (<div><Spinner animation="border" /></div>) :( <div>
        {articles.map((articel: any, index) => {
            return (
              <div>
                <Link to={`/moredetails/${articel.author}`}>
                  <Card>
                    <Card.Img variant="top" src={articel.urlToImage} />
                    <Card.Body>
                      <Card.Title key={index}>{articel.author}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
          </div>
    )}
        
      </div>
    </div>
    </>);
};
export default DetailsPage;
