import { createContext,useContext,useState,useEffect } from "react";
import {
    getCurrentUser,
    loginUser,
    logoutUser,
    registerUser,
} from "../utils/auth";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null);

    useEffect(() => {
        const user = getCurrentUser();
        setCurrentUser(user);
    },[]);

function login(username,password) {
    const success = loginUser(username,password);
    if (success){
        setCurrentUser(getCurrentUser());
    }
    return success;
}

function signup(username,password) {
    return registerUser(username,password);
}

function logout() {
    logoutUser();
    setCurrentUser(null);
}

const value = { currentUser,login,signup,logout};

return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
}

export function useAuth() {
    return useContext(AuthContext);
}
