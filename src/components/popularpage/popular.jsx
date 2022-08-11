import React, { Fragment, useEffect, useState } from "react";
import "./popular.css";
import Favorite from "../favoritesPage/favoriteButton/favoriteButton";
import { Link } from "react-router-dom";
import SearchBar from "./searchPage/search";

const Popular=()=> {
  const [popular, setPopular] = useState([]);
  const [localStore, setLocalStore] = useState([]);
  const [store, setStore] = useState(() => localStorage.getItem("popular"));

  useEffect(() => {
    getPopular();
  }, [popular]);

  const getPopular = async () => {
    setStore(() => localStorage.getItem("popular"));

    if (store) {
      setPopular(JSON.parse(store));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=24`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  const filterData = (id) => {
    return popular.filter((recipe) => recipe.id === id);
  };

  const saveFaveData = (id) => {
    filterData(id).forEach((cur) => {
      setLocalStore((prev) => {
        return [...prev, cur];
      });
    });
    localStorage.setItem("fave", JSON.stringify(localStore));
  };

  return (
    <Fragment>
      <div className='popular-div'>
        <p className='popular-recipe'>Popular Recipe</p>
        <SearchBar />
        <div className='recipes'>
          {popular.map((items, index) => {
            return (
              <div className='recipe-card' key={items.id} data-testid ={`recipe-number-${index}`}>
                <Link to={"/recipe/" + items.id}>
                  <div className='recipe-img-div'>
                    <img src={items.image} alt='' />
                  </div>
                  <div className='recipe-details'>
                    <p className='recipe-name'>{items.title}</p>
                    <p className='recipe-prep-time'>
                      Ready In Minutes: {items.readyInMinutes}
                    </p>
                  </div>
                </Link>
                <Favorite
                  OnClick={() => {
                    // favArr = [localStore, ...favArr]
                    saveFaveData(items.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Popular;
