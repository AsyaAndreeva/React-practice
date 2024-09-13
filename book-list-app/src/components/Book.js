import { useState } from "react";
import { useEffect } from "react";
import styles from './Book.module.css';

export const Book = (props) => {
  const [hightlithed, setHighlited] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    console.log("Mounting: " + props.title);
  }, []);

  useEffect(() => {
    console.log("Updating: " + props.title);
  }, [hightlithed]);

  const clickHandler = () => {
    setHighlited((state) => !state);
  };

  let style = {};
  if (hightlithed) {
    style.backgroundColor = "blue";
  }

  const deleteHandler = () => {
    setDeleted(true);
  };

  if(deleted){
    return <h2>Deleted</h2>
  }

  return (
    <li style={style} className={styles["book-item"]}>
      <article>
        <h2>{props.title}</h2>
        <footer>
          <button onClick={clickHandler}>Highlight</button>
          <button onClick={deleteHandler}>Delete</button>
          <span>{props.author}</span>
        </footer>
      </article>
    </li>
  );
};
