import { useContext } from "react";
import AuthContext from "../context/store";

const HeaderComponent = () => {

    const mycontext = useContext(AuthContext);

    return (
        <>
        <button onClick={() => mycontext.logHandler()}>{mycontext.logStatus === true ? "log out" : "log in"}</button>
        </>
    )
}

export default HeaderComponent;