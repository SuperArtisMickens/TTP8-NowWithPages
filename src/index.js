import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './About';
import Marathon from './Marathon';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
						{/* Switch to your pages here! */}
						<Switch>
							{/* This switches to the About page with the AboutUs component */}
							<Route path="/About">
								<About/>
							</Route>
							{/* This switches to the Marathon page with the Day Challenge component */}
							<Route path="/Marathon">
								<Marathon/>
							</Route>
							{/* This is the home page that isnt hooked up to anything right now */}
							<Route path="/">
								<MiniDrawer/>
							</Route>
						</Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
