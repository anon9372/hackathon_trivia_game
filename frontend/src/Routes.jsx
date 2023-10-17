import React from 'react'; // Import React

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";
import GameRoom from './pages/GameRoom'
import Home from './pages/Home'

// const GameRoom = lazy(() => import("./pages/GameRoom"));
// const Home = lazy(() => import("./pages/Home"));

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* <Suspense fallback={<div />}> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/room/:id' element={<GameRoom />} />
          <Route exact path='/' element={<Home />} />
        {/* </Suspense> */}
      </Routes>
      </Router>
      </>
  );
};

export default AppRoutes;
