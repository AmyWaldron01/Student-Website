import { Button, TextField } from "@mui/material";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./use";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // We get & set the user details here
  const { user, fetchUser, checkLogIn } = useContext(UserContext);

  // Using "useState" hook to keep track of the values.
  const [form, setForm] = useState({
    collegeID: "",
    password: ""
  });

  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // This function will redirect the user once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/Home");
  }

  // Buggy- want it to log off on close before uncommenting
  // // If the user is already logged in
  // const loadUser = async () => {
  //   if (!user) {
  //     const fetchedUser = await fetchUser();
  //     if (fetchedUser) {
  //       // Redirecting
  //       redirectNow();
  //     }
  //   }
  // }

  // // Check if user is logged in
  // useEffect(() => {
  //   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onSubmit = async (event) => {
    try {
      // Validate the user credentials
      const user = await checkLogIn(form.collegeID, form.password);
      if (user) {
        //alert("Log In Successful!")
        redirectNow();
      }
    } catch (error) {
      alert(error)
    }
  };

  return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto"}}>
    <h1>LogIn Below</h1>
    <TextField
      label="CollegeID"
      type="text"
      required
      variant="outlined"
      name="collegeID"
      value={form.collegeID}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Password"
      type="password"
      required
      variant="outlined"
      name="password"
      value={form.password}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <Button variant="contained" color="primary" onClick={onSubmit}>LogIn</Button>
    {/* Take to contact page */}
    {/* <p>Don't have an account? <Link to="/signup">Signup</Link></p> */}
  </form>
}

export default LogIn;