import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import { v4 as uuidV4} from "uuid"
import Home from './components/Home/index';
import TextEditor from './components/TextEditor/index';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/doc">
        <Redirect to={`/doc/${uuidV4()}`} />
      </Route>
      <Route exact path="/doc/:id">
        <TextEditor />
      </Route>
    </Router>
    </div>
  );
}

export default App;
