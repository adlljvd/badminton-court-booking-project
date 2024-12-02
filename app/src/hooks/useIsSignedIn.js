import { useContext } from "react";

import AuthContext from "../context/AuthContext"

export default function useIsSignedIn() {
    const authContext = useContext(AuthContext)

    return authContext.isLogin

}