function say(word1) {
  return function (word2) {
    console.log(word1, word2);
  };
}

let hell = say("hello");
console.log(hell);
hell("world");
hell = say("goodbye");
hell("cruel world");
