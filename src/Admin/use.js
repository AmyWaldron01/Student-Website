import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../Realm/constants";

// Creating a Realm App Instance
const app = new App(APP_ID);

// Creating a user context to manage all user related functions
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to Login user into our Realm using their CollegeID & Password
  const emailPasswordLogin = async (collegeID, password) => {
    const credentials = Credentials.emailPassword(collegeID, password);
    const authedUser = await app.logIn(credentials);
    setUser(authedUser);
    return authedUser;
  };

  // Function if the user is already logged in from local storage
  const fetchUser = async () => {
    if (!app.currentUser) return false;
    try {
      await app.currentUser.refreshCustomData();
      // Now if we have a user we are setting it to our user context
      setUser(app.currentUser);
      return app.currentUser;
    } catch (error) {
      throw error;
    }
  }

  // Function to logout user
  const logOutUser = async () => {
    if (!app.currentUser) return false;
    try {
      await app.currentUser.logOut();

      // Reset once loggedOut.
      setUser(null);
      return true;
    } catch (error) {
      throw error
    }
  }

  return <UserContext.Provider value={{ user, setUser, fetchUser, checkLogIn: emailPasswordLogin, logOutUser }}>
    {children}
  </UserContext.Provider>;
}