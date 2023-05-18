import { createContext } from "react";

const UserContext = createContext({
  filteredRestaurants: null,
});

export default UserContext;
