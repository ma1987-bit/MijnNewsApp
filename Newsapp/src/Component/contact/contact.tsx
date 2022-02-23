import { ChangeEventHandler, MouseEventHandler,  useState } from 'react';
import styles from './contact.module.css'
//import axios from 'axios';
import db from '../firbase/firebase'
import {  setDoc, doc } from 'firebase/firestore';
import { FcBusinessContact} from "react-icons/fc";
import { ImUser,ImBubble,ImMail } from "react-icons/im";
import MyComponent from './googlemap';
import { Col, Container, Row } from 'react-bootstrap';


interface Userdata {
    firstname:string,
    lastname:string,
    email:string
   
}
const ContactPage = () => {
 
   
    const [input, setInput] = useState<Userdata>({
        firstname: '',
        lastname: '',
        email: '',
    })
    const [textarea, setTextarea] = useState<string>('')
    const HandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return (
                {
                    ...prevInput, [name]: value
                }
            )
        })
    }
    const textAreaHandleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setTextarea(event.target.value);
    }
    const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        const userInput ={
            firstname :input.firstname,
            lastname :input.lastname,
            email :input.email,
            textarea
        }
       
        setDoc(doc(db, "contact-form",userInput.firstname), userInput)
     .then(()=>{alert('Message has been submitted')});
     // hier wordt de contact form leg na alert message
     setInput({
        firstname:'',
        lastname:'',
        email:''
    })
    
    };
    
   
   
    
    return(
        < div className={styles.contacbackground}>
        <Container >
  <Row>
  
 <Col sm={8}>
 <div className={styles.contactform}>
            <form className={styles.container}>
                <h2>CONTACT US < FcBusinessContact /></h2>
                <label htmlFor="fname"><ImUser />First Name</label>
                <input type="text" id="firstname" name="firstname" value={input.firstname} placeholder="Your name.." onChange={HandleChange} />
                <label htmlFor="lname"><ImUser />Last Name</label><br />
                <input type="text" id="lastname" name="lastname" value={input.lastname} placeholder="Your last name.." onChange={HandleChange} />
                <label htmlFor="text"><ImMail />Email</label>
                <input type="text" id="email" name="email" value={input.email} placeholder="Your Email.." onChange={HandleChange} />
                <label htmlFor="subject"><ImBubble />Message</label>
                <textarea id="message" name="message" value={textarea} placeholder="Write something.." onChange={textAreaHandleChange}></textarea>
                <input type="submit" value="Submit" onClick={handleClick}></input>
            </form>
            

        </div>
 </Col>
 <Col sm={4}>
 <MyComponent />
  </Col>
  </Row>
</Container>
      
        

        </div>
    )
    
}
export default ContactPage;