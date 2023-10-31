import React from 'react'
import { Hanko } from '@teamhanko/hanko-elements'

const AppContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const Context=({ children }) => {
    const [active, setActive] = React.useState('Home')
    const [url, setUrl] = React.useState('/')
    const [urlLogin, setUrlLogin] = React.useState('/login')

    const apiUrl = import.meta.env.VITE_BASE_URL;
    const hanko = new Hanko(apiUrl)

    const session = hanko.session.get()

    const user = () => session && session.userID
    
    const getUser = () => {
        return JSON.parse(localStorage.getItem(`userID()`))
    }


    return (
        <AppContext.Provider
            value={{
                active,
                url,
                urlLogin,
                setUrlLogin,
                setActive,
                setUrl,
                user,
                getUser,
        }}
        >
            { children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export  const useGlobalContext = () => {
    return React.useContext(AppContext)
}