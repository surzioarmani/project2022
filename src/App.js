import Movie from './components/Movie';
import { BrowserRouter as Router, Route, Switch, Routes, Link} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {  
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route> 
      <Route path="/"> 
        <Home />
      </Route>  
    </Switch>
  </Router>
  ); 
} 
 
export default App; 
