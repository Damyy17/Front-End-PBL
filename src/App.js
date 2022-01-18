import React from 'react';
import './CSS/index.css';
import './CSS/home.css'
import './CSS/login.css'
import './CSS/about_us.css'
import './CSS/signup.css'
import './CSS/search.css'
import './CSS/view_item.css'
import Navbar from './Pages/Navbar';
import Login from './Pages/Login'
import About from './Pages/About';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from './Pages/Signup';
import Search from './Pages/Search';
import ViewItem from './Pages/ViewItem'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/view" exact element={<ViewItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
