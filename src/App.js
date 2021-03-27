import "./App.scss";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsFilm from "./pages/DetailsFilm";
import WatchFilm from "./pages/WatchFilm";
import SearchPage from "./pages/SearchPage";
import TypePage from "./pages/TypeFilm";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/film/:id" component={DetailsFilm}></Route>
        <Route  path="/search" component={SearchPage}></Route>
        <Route path="/watch/:id" component={WatchFilm}></Route>
        <Route path="/the-loai/:slug" exact component={TypePage}></Route>
        <Route component={NotFound} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
