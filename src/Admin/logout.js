import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../Admin/Users';

export default function LogOut() {
  const { logOutUser } = useContext(UserContext);

  // Clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling logOutUser from user
      const loggedOut = await logOutUser();
      // Refresh to be Logged out
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <h1>Sign Off Below</h1>
      <Button variant="contained" onClick={logOut}>Logout</Button>
    </>
  )
}