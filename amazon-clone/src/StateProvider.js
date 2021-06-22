// setup data layer
// track basket

import React, { createContext, useContext, useReducer } from "react";
// creates the data layer
export const StateContext = createContext();
// provides state
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// allows you to pull information from the data layer
export const useStateValue = () => useContext(StateContext);