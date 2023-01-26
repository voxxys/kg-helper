import { Component, createEffect, createSignal } from 'solid-js';

import { Route, Routes } from 'solid-app-router';

import styles from './App.module.css';
import Nav from './components/Nav';
import Plural from './pages/Plural';

const [word, setWord] = createSignal('');

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

export { word, setWord };
export default App;
