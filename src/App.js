import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Doctors from './components/Doctors/Doctors';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import GetAppointment from './components/GetAppointment/GetAppointment';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Layout>
                <Login></Login>
              </Layout>
            </Route>
            <Route path="/register">
              <Layout>
                <Register></Register>
              </Layout>
            </Route>
            <Route path="/doctors">
              <Layout>
                <Doctors></Doctors>
              </Layout>
            </Route>
            <PrivateRoute path="/doctor/:doctorId">
              <Layout>
                <DoctorDetails></DoctorDetails>
              </Layout>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Layout>
                <GetAppointment></GetAppointment>
              </Layout>
            </PrivateRoute>
            <Route path="/about">
              <Layout>
                <AboutUs></AboutUs>
              </Layout>
            </Route>
            <Route path="/contact">
              <Layout>
                <ContactUs></ContactUs>
              </Layout>
            </Route>
            <Route path="*">
              <Layout>
                <NotFound></NotFound>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
