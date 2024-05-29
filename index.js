const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

// Extract all names from the nested arrays using flatMap
const names = data.flatMap(group => group.map(({ name }) => name));
console.log(names);

// Remove duplicate names using Set and spread operator
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);

