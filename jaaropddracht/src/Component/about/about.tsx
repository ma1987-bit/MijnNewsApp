import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ThemeContext } from '../context/themecontext';
import styles from './about.module.css'
import image from '../Assets/aboutfoto.jpg'
const AboutPage =()=>{
    const{mode}= useContext(ThemeContext)
    return(
        <>
        <div className={`${styles.container}${mode === 'light'? styles.cardDark : ''}`}>
            
            <Container>
            <Row>
            <Col className={styles.abouttext}>
            <h3 className={styles.aboutus}>About Us</h3>
            </Col>
            </Row>
            <Row>
              <Col>
              <div >
            <p className={styles.loremtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam repellat dolor saepe, eveniet reprehenderit id odit deleniti modi explicabo quibusdam fugiat quos perferendis eum quia ipsam? Nemo, nihil ipsum!
            Sunt corporis at voluptate quaerat odit architecto voluptatum illum facilis enim officiis assumenda necessitatibus consectetur, soluta velit possimus quisquam molestias labore nobis harum? Esse, architecto numquam officia magni necessitatibus ullam?</p>
            </div>
              </Col>
              <Col>
              <img className={styles.aboutfoto} src={image} alt="" width={400} height={400} />   
              </Col>
            </Row>
            <Row>
            <Col className={styles.buttonstyles}>
            <Button className={styles.buttonstyles} variant="primary">Read More</Button>{' '}
            </Col>
            </Row>
          </Container>
        </div>
          </>
    )
}
export default AboutPage;