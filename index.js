
let user = {
    name: 'S',
    region: {
        title: 'Tashkent',
        adress: {
            add: 'addres'
        }
    }
};

let clone = structuredClone(user)
clone.region.title = 'karhsi'
console.log(user);
console.log(clone);