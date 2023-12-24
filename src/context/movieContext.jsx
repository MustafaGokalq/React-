import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";



const movieContext = createContext()



function Provider({children}) {

    const initialState = {
        watchlist: localStorage.getItem("watchlist")
          ? JSON.parse(localStorage.getItem("watchlist"))
          : [],
        watched: localStorage.getItem("watched")
          ? JSON.parse(localStorage.getItem("watched"))
          : [],
      };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    },[state]);

    const addMovieToWatchlist = (movie) =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload:movie})
    };

    const removeMovieFromWatchlist = (id) =>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST" ,payload: id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
      };

      const moveToWatchlist = (movie) =>{
        dispatch({type:"MOVE_TO_WATCHED" , payload:movie})
      }

      const removeFromMovieWatched = (id)=>{
        dispatch({type:"REMOVE_FROM_MOVİE_WATCHED", payload:movie})
      }

    const methodActive={
        watchlist:state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromMovieWatched
    }

    return ( 
        <movieContext.Provider value={methodActive}>
            {children}
        </movieContext.Provider>

     );
}

export {Provider};

export default movieContext;