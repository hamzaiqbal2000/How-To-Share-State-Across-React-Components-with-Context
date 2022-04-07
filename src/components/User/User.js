//create context
//wrap it around the provider so that it is available at root of objects
//then use the useContext hook to get data diplayed on particular component

import { createContext } from "react";

const UserContext = createContext();
export default UserContext;
