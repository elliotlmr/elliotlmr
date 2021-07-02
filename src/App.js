import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
