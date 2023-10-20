import React, { createContext, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const authContext = createContext(false);

export default function Auth({children}) {
    
    const [authent, setAuthent] = useState("");

    onAuthStateChanged(auth, (user) => {

        if (user) {

            setAuthent(user);

        } else {

            setAuthent(null);

        }

    })


    return (
        <authContext.Provider value={authent}>
            {children}

        </authContext.Provider>
    )
}
