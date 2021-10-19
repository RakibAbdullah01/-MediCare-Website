import logo from './logo.svg';
import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment';
import Confirmation from './Pages/Confirmation/Confirmation';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Service from './Pages/Service/Service';
import Doctors from './Pages/Doctors/Doctors';
import Doctor from './Pages/Doctor/Doctor';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import LoginReg from './Pages/Login/Login/LoginReg';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <PrivateRoute exact path="/appoinment">
            <Appoinment/>
          </PrivateRoute>

          <PrivateRoute exact path="/confirmation">
            <Confirmation/>
          </PrivateRoute>

          <Route exact path="/login">
            <LoginReg/>
          </Route>

          <Route exact path="/service">
            <Services/>
          </Route>

          <PrivateRoute exact path="/service/:id">
            <Service/>
          </PrivateRoute>

          <Route exact path="/doctor">
            <Doctors/>
          </Route>

          <PrivateRoute exact path="/doctor/:id">
            <Doctor/>
          </PrivateRoute>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>







          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
