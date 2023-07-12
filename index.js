let obj = {
    name: 's',
    region: {
        title: 'tashkent'
    }
}

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
clone.region.title = 'k'

console.log(obj);
console.log(clone);