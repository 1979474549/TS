import { Dictionary } from './dictionary';

let dictionary = new Dictionary<string, number>();

dictionary.set("a", 1);
dictionary.set("b", 2);
dictionary.forEach((key, value) => {
    console.log(`${key}:${value}`)
})
dictionary.set('c', 3);
dictionary.set('a', 5);
console.log('=================');
dictionary.forEach((key, value) => {
    console.log(`${key}:${value}`)
})
console.log(dictionary.has('a'));

console.log(dictionary.has('d'));

console.log(dictionary.size);

let result = dictionary.get('a');
console.log(result);
