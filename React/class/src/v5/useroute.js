// npm install react-router-dom@6

import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/profile/:id", element: <Profile /> },
    // Add more routes as needed
  ];

  const routing = useRoutes(routes);

  return routing;
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
