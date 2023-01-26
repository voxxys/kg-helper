import { Component, createEffect, createSignal, For } from 'solid-js';
import { word, setWord } from '../App';

const Plural: Component = () => {
  const updateWord = (event: Event) => {
    event.preventDefault();
    const wordInput = document.querySelector('#wordInput') as HTMLInputElement;

    setWord(wordInput.value);

    if (wordInput.value.length > 0) {
      if (/[пфсшщчхкктц]$/.test(wordInput.value)) {
        setSuf('т?р');
      } else if (/[бвджжзггмнңрйл]$/.test(wordInput.value)) {
        setSuf('д?р');
      } else {
        setSuf('л?р');
      }
    } else {
      setSuf('');
    }

    let lastVowel_regex = /[аэеыиоөуү].*(?![аэеыиоөуү])$/;

    console.log(
      'last vowel regex IDX: ',
      wordInput.value.search(lastVowel_regex)
    );

    let idx = wordInput.value.search(lastVowel_regex);

    console.log('last vowel regex CHAR: ', wordInput.value[idx]);
  };

  // const gluhie_sogl = 'п, ф, с, ш, щ, ч, х, к, к, т, ц';
  // const zvon_sogl = 'б, в, д, ж, ж, з, г, г';
  // const son_sogl = 'м, н, ң, р, й, л';

  // const suf_plural_cond = [/п$/];

  // const suf_plural = ['л?р', 'д?р', 'т?р'];

  const [suf, setSuf] = createSignal('');

  return (
    <div>
      <input
        onInput={updateWord}
        type="text"
        class="p-1 align-middle"
        id="wordInput"
        value=""
        required
      ></input>

      <h1>{word() + suf()}</h1>
    </div>
  );
};

export default Plural;
