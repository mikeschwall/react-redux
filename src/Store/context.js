import React, { useState } from 'react';

const AuthContext = React.createContext({
    logStatus:false,
    logHandler:() => {}
});

export const AuthContextProvider = ({children}) => {
    const [logStatus,setLogStatus] = useState(false);
    const logHandler = () => {
        setLogStatus(status => status = !status);
    }

    return <AuthContext.Provider value={{logStatus,logHandler}}>{children}</AuthContext.Provider>
}
