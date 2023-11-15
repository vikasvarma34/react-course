import React from 'react'

const initialState = {
    data:[{firstName:"emma", lastName:"watson", email:"emmawatson34@gmail.com"},
    {firstName:"Vikas", lastName:"Pokala", email:"vikasvarma34@gmail.com"},
    {firstName:"Shirisha", lastName:"Nenavath", email:"shirishan03@gmail.com"}]
}

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({children}) => {
    return <MainDataContext.Provider value={initialState}>{children}</MainDataContext.Provider>;
};

