import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './container/Navbar';
import PokedexList from './components/PokedexList';
import Comparator from './components/Comparator';
import RandomTeam from './components/RandomTeam';
import StaffList from './components/StaffList';
import './App.css';
import Header from './container/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <PokedexList />
            </Route>
            <Route path="/PokedexList">
              <PokedexList />
            </Route>
            <Route path="/RandomTeam">
              <RandomTeam />
            </Route>
            <Route path="/Comparator">
              <Comparator />
            </Route>
            <Route path="/StaffList">
              <StaffList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
