import './App.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
      </Routes>
    </>
  );
}

export default App;
