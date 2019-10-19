const strings = ['a', 'b', 'c', 'd'];

console.log(strings[2]);

// push & pop
strings.push('e');
console.log(strings);
strings.pop();
console.log(strings);

// unshift
strings.unshift('x'); // O(n)
console.log(strings);

strings.splice(2,0,'alien');
console.log(strings);
