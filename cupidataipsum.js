function hue(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return { ...a, ...b }; // Merges two objects
    }
    return null;
}

const obj1 = { name: 'Alice' };
const obj2 = { age: 30 };

console.log(hue(obj1, obj2)); // Output: { name: 'Alice', age: 30 }
