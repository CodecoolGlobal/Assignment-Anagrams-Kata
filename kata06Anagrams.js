console.log("start");
const start_time = Date.now();
const words = require("fs").readFileSync("data.txt").toString().split("\n").map(e => e.trim());

let max_anagrams_number = 0;
let max_anagrams_words;
let anagrams_number = 0;

const anagrams = new Map();

for (let i = 0; i < words.length; i++) {
    const word_sorted = words[i].split('').sort().join("");
    const ana = anagrams.get(word_sorted)
    if (ana) ana.push(words[i]);
    else anagrams.set(word_sorted, [words[i]]);
}

anagrams.forEach(word_list => {
    if (word_list.length > max_anagrams_number) {
        max_anagrams_number = word_list.length;
        max_anagrams_words = word_list;
    }
    if (word_list.length > 1) anagrams_number++;
});

const duration = Date.now() - start_time;

console.log("words number : " + words.length);
console.log("number of anagrams : " + anagrams_number);
console.log("max anagrams (" + max_anagrams_words.length + ") : ");
console.log(max_anagrams_words);
console.log("compute done in " + duration + " ms");