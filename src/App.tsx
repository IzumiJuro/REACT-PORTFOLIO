import './App.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
