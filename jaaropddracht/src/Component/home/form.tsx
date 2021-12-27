import React, { ChangeEventHandler, useState } from "react";
import { Button} from "react-bootstrap";
import styles from './home.module.css'

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
    <div className={styles.serach}>
      <form onSubmit={handelSubmit}>
        <input className={styles.input}
          onChange={handleChange}
          type="text"
          placeholder="Voorbeeld - sport"
        />
        <Button className={styles.searchbutton} type="submit" variant="outline-secondary">Search</Button>{' '}
      </form>
    </div>
  );
};
