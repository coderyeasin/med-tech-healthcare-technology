import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/Home/Login/Login';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route  path="/home"><Home></Home></Route>
          {/* <Route  path="/feature"><Home></Home></Route>
          <Route  path="/services"><Home></Home></Route> */}
          <Route  path="/login"><Login></Login></Route>
          <Route  path="*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
