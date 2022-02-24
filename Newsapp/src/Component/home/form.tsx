import React, { ChangeEventHandler, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./home.module.css";


export const SerachForm = ({ serachText }: any) => {
  const [text, setText] = useState("");
  const handelSubmit = (e: any) => {
    e.preventDefault();
    serachText(text.toUpperCase());
    
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };
  return (
    <div className={styles.formdesign}>
    <form onSubmit={handelSubmit}>
        <input  
          onChange={handleChange}
          type="text"
          placeholder="Voorbeeld - sport"
         
        />
        <input type="submit" value="Submit"  />
      </form>
      </div>
  );
};
