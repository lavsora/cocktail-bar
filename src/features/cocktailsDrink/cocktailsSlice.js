import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drinks: [],
  };

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        addCocktailsToStore: (state, action) => {
            state.drinks = action.payload;
        },

        likeCocktail: (state, action) => {
            const indexDrink = state.drinks.findIndex(({idDrink}) => idDrink === action.payload);
                state.drinks[indexDrink].liked = !state.drinks[indexDrink].liked;
        },

        removeCocktail: (state, action) => {
            state.drinks = state.drinks.filter(drink => drink.idDrink !== action.payload);
        },
    },

})

export const { addCocktailsToStore, likeCocktail, removeCocktail } = cocktailsSlice.actions;

export const selectCocktails = (state) => state.cocktails.drinks;

export default cocktailsSlice.reducer;