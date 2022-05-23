import React from "react";
import styles from "./Card.module.css";
import iconLike from "../../image/like-icon.png";
import iconDelete from "../../image/delete-icon.png";
import {
  likeCocktail,
  removeCocktail,
} from "../../features/cocktailsDrink/cocktailsSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={props.data.strDrinkThumb} alt={props.data.strDrink} />
          <div className={styles.shadow}></div>
          <div className={styles.actions}>
            <div className={styles.like_button}>
              <button
                className={styles.click_like_button}
                onClick={() => dispatch(likeCocktail(props.data.idDrink))}
              >
                <img src={iconLike} alt="Like" />
              </button>
            </div>
            <div className={styles.delete_button}>
              <button
                className={styles.click_delete_button}
                onClick={() => dispatch(removeCocktail(props.data.idDrink))}
              >
                <img src={iconDelete} alt="Delete" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card_list}>
          <h3>{props.data.strDrink}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
