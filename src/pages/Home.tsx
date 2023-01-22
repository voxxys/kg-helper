import { Component, createEffect, For } from 'solid-js';
import { word, setWord } from '../App';

const Home: Component = () => {
  const updateWord = (event: Event) => {
    event.preventDefault();
    const wordInput = document.querySelector('#wordInput') as HTMLInputElement;

    setWord(wordInput.value);
  };

  createEffect(() => {
    console.log(word());
  });

  return (
    <div>
      <form onSubmit={updateWord}>
        <input
          type="text"
          class="p-1 align-middle"
          id="wordInput"
          value=""
          required
        ></input>
      </form>

      <h1>{word()}</h1>
    </div>
  );
};

export default Home;
