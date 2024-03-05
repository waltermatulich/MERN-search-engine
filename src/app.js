import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchBooks from './pages/SearchBooks';
import SavedBooksPage from './pages/SavedBooksPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooksPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
