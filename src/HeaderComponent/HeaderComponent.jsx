import { useContext } from "react";
import AuthContext from "../Store/context";

export const HeaderComponent = () => {

    const headerContext = useContext(AuthContext);

    return <button onClick={() => headerContext.logHandler()}>{headerContext.logStatus === true ? "log out" : "log in"}</button>
}

export default HeaderComponent;