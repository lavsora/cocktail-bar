import React, { useEffect, useState } from "react";
import styles from "./CardAPI.module.css";
import Card from "../../components/card/Card";
import { useSelector, useDispatch } from 'react-redux';
import { addCocktailsToStore, selectCocktails } from "../../features/cocktailsDrink/cocktailsSlice";

function FetchAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const drinks = useSelector(selectCocktails);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          dispatch(addCocktailsToStore(result.drinks))
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Error: {error.message} </div>;
  }

  if (!isLoaded) {
    return <div> Loading... </div>;
  }

  return (
    <div className={styles.grid}>
      {drinks.map((item) => (
        <Card key={item.strDrink} data={item} />
      ))}
    </div>
  );
}

export default FetchAPI;
