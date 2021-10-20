import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/Home/Login/Login';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Doctors from './Pages/Doctors/Doctors';
import MedTechs from './Pages/MedTechs/MedTechs';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Detail from './Pages/Detail/Detail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
          <PrivateRoute  path="/doctors"><Doctors></Doctors></PrivateRoute>
            <PrivateRoute path="/medtechs"><MedTechs></MedTechs></PrivateRoute>
            <Route exact path="/detail/:id"><Detail></Detail></Route>
          <Route  path="/login"><Login></Login></Route>
          <Route  path="*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
