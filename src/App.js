//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'; //NavBar
import './App.css';

//Import React
import React from 'react';

//Import Navbar
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//Import Components
//Here will be the classes from different Components
import LogIn  from './Admin/LogIn';
import PrivateRoute from './Admin/PrivateRoute';
import { HomeStudent } from './Basics/HomeStudent';
import { Calculate } from './ToDo/Calculate';
import { AddGrade } from './Components/AddGrade';
import { ShowGrades } from './Components/ShowGrades';

//Import Router
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

//Import User, if logged in
import { UserProvider } from "./Admin/User";

//Class
class App extends React.Component {
  //Runs Code
  render() {
    //Returns after running
    return (
      <Router>
        {/* User can access any page */}
        <UserProvider>
          <div className="App">
            {/* Define NavBar */}
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="/HomeStudent">Grades4U</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/Calculate">Calculate</Nav.Link>
                  <Nav.Link href="/AddGrade">AddGrade</Nav.Link>                  
                  <Nav.Link href="/ShowGrades">Display Grades</Nav.Link>        
                </Nav>
              </Container>
            </Navbar>

            {/* Use Routing to change to page and call different components */}
            <Routes>
              {/* Make it so Log In is default*/}
              <Route exact path="/" element={<LogIn />}></Route>
              {/* Private Routing */}
              <Route element={<PrivateRoute />}>
                <Route exact path="/HomeStudent" element={<HomeStudent />}></Route>
                <Route exact path="/Calculate" element={<Calculate />}></Route>
                <Route exact path="/AddGrade" element={<AddGrade />}></Route>            
                <Route exact path="/ShowGrades" element={<ShowGrades />}></Route>
              </Route>
            </Routes>
          </div>
        </UserProvider>
      </Router>
    );
  }
}

//Export
export default App;