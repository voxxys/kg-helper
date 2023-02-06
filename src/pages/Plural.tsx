import { Component, createEffect, createSignal, For } from 'solid-js';

const [word, setWord] = createSignal('');
const [suf, setSuf] = createSignal('');

// var stuff: { [key: string]: string } = {};

const sufPluralVowelHarmony: { [key: string]: string } = {
  а: 'a',
  ы: 'a',
  е: 'e',
  и: 'e',
  о: 'о',
  у: 'о',
  ө: 'ө',
  ү: 'ө',
};

let lastVowel_regex = /[аэеыиоөуү](?=([^аэеыиоөуү]*$))/;
let vowelEnd_regex = /[аэеыиоөуү]$/;
let sonorantEnd_regex = /[мнңрйл]$/;
let unvoicedEnd_regex = /[пфсшщчхкктц]$/;
let voicedEnd_regex = /[бвджжзггмнңрйл]$/;

const Plural: Component = () => {
  const updateWord = (event: Event) => {
    const wordInputElement = document.querySelector(
      '#wordInput'
    ) as HTMLInputElement;
    const input = wordInputElement.value;

    setWord(input);

    if (input.length == 0) {
      setSuf('');
      return;
    }

    let pluralSufBase;

    if (unvoicedEnd_regex.test(input)) {
      pluralSufBase = 'т?р';
    } else if (voicedEnd_regex.test(input)) {
      pluralSufBase = 'д?р';
    } else if (sonorantEnd_regex.test(input) || vowelEnd_regex.test(input)) {
      pluralSufBase = 'л?р';
    } else {
      pluralSufBase = '';
      console.log('something went wrong, word ends with unknown symbols');
    }

    let lastVowel = input.match(lastVowel_regex)?.[0] ?? '';
    if (!lastVowel) {
      setSuf('');
      return;
    }

    let pluralSufVowel = sufPluralVowelHarmony[lastVowel] ?? '';

    let pluralSuf = pluralSufBase.replace('?', pluralSufVowel);

    setSuf(pluralSuf);

    console.log('last vowel regex CHAR: ', lastVowel);
  };

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
