import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import About from './About/About.js';
import Home from './Home/Home.js';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById('root'));