import { Component, createEffect, createSignal } from 'solid-js';

import { Route, Routes } from 'solid-app-router';

import styles from './App.module.css';
import Nav from './components/Nav';
import Plural from './pages/Plural';

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Plural />} />
      </Routes>
    </div>
  );
};

export default App;
