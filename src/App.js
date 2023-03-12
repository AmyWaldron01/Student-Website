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
//Here will be the classes from different pages
import { Home } from './Pages/Home';
import { LogIn } from './Pages/LogIn';
import { Module } from './Pages/Module';
import { Year } from './Pages/Year';
import { GPA } from './Pages/GPA';

//Import Router
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

//Class
class App extends React.Component {
  //Runs Code
  render() {
    //Returns after running
    return (
      <Router>
        <div className="App">
          {/* Define NavBar */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/Home">Grades4U</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/Module">Calculate Module Status</Nav.Link>
                <Nav.Link href="/Year">Calculate Years Grade</Nav.Link>                  
                <Nav.Link href="/GPA">Calculate GPA</Nav.Link>        
              </Nav>
            </Container>
          </Navbar>

          {/* Use Routing to change to page and call different components */}
          <Routes>
            {/* Make it so Home Page is default*/}
            <Route path='/' element={<LogIn></LogIn>}></Route>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Module' element={<Module></Module>}></Route>
            <Route path='/Year' element={<Year></Year>}></Route>            
            <Route path='/GPA' element={<GPA></GPA>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

//Export
export default App;