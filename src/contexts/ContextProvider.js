import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()



export const ContextProvider = ({ children }) => {
    // useState will be passed here


  return (
    <StateContext.Provider 
        value={{
            // pass the state in here as props
        }}
    />
  )
}

export const useStateContext = () => useContext(StateContext);