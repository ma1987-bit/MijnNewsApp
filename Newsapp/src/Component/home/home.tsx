import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./home.module.css";
import { SerachForm } from "./form";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { ThemeContext } from "../context/themecontext";

const HomePage = () => {
  const { mode } = useContext(ThemeContext);
  const [articles, setArticels] = useState([]);
  const [term, setTerm] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_NYT_API_KEY_NAME}`
        );
        const articles = await response.json();
        setArticels(articles.response.docs);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [term]);

  return (
    <>
      <div
        className={`${styles.cards}${mode === "light" ? styles.cardDark : ""}`}
      >
        <div className={styles.showcase}>
          <div className={styles.overlay}>
          <h1 className={styles.zoektext}>JE ZOEKT EEN ARTIKEL OVER {term}</h1>
            <SerachForm serachText={(text: any) => setTerm(text)}/>
          </div>
        </div>
        {isloading ? (
          <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          <div>
            <div className={styles.homebody}>
              {articles.map((articel: any) => {
                const {
                  abstract,
                  headline: { main },
                  byline: { original },
                  lead_paragraph,
                  news_desk,
                  section_name,
                  web_url,
                  _id,
                  word_count,
                } = articel;
                return (
                  <article
                    className={`${styles.cards}${
                      mode === "dark" ? styles.cardDark : ""
                    }`}
                    key={_id}
                  >
                    <Row xs={1} md={2} className="g-4">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                          <Card border="success">
                            <Card.Body className={styles.cards}>
                              <Card.Title>{main}</Card.Title>
                              <Card.Text >
                                {abstract}
                                {lead_paragraph}
                                {original}
                                <ul>
                                  <li>{original}</li>
                                  <li>{news_desk}</li>
                                  <li>{section_name}</li>
                                  <li>{word_count}</li>
                                </ul>
                                <a href={web_url}>Web Resource</a>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default HomePage;
