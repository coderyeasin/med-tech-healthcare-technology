import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          
          {/* <Route  path="/feature"><Home></Home></Route>
          <Route  path="/services"><Home></Home></Route> */}

          <Route  path="*"><NotFound></NotFound></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
