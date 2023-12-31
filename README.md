1. Brauzerda JavaScript veb-sahifani manipulyatsiya qilish, foydalanuvchi va veb-server bilan o'zaro aloqa qilish 
    bilan bog'liq hamma narsani qila oladi.

2. JavaScript-da o'zgaruvchilar nomlarida ikkita cheklov mavjud:
    *Nomlar faqat harflar, raqamlar yoki belgilarni o'z ichiga olishi kerak _ $.
    *Birinchi belgi raqam bo'lmasligi kerak.

3. Zaxiralangan so'zlar ro'yxati mavjud bo'lib , ularni o'zgaruvchan nomi sifatida ishlatib bo'lmaydi, 
    chunki ular tilning o'zi tomonidan qo'llaniladi.
    Masalan: <b>let</b>, <b>class</b>, <b>return</b>, va <b>function</b> ajratilgan.

4. O'zgaruvchilar nomli <b>apple</b> va <b>APPLE</b> ikki xil o'zgaruvchilardir.

5. NaN ** 0 or undefined ** 0 = 1

6. let a; 
    uzgaruvchini elon qildik lekin unga qiymat biriktirmasak u a=undefined ga teng bo`ladi

7. typeof undefined // "undefined" <br />
    typeof 0 // "number" <br />
    typeof 10n // "bigint" <br />
    typeof true // "boolean" <br />
    typeof "foo" // "string" <br />
    typeof Symbol("id") // "symbol" <br />
    typeof Math // "object"  (1) <br />
    typeof null // "object"  (2)  -> Null uchun "ob'ekt" qaytariladi - bu tildagi xato, u aslida ob'ekt emas. <br />
    typeof alert // "function"  (3) <br />

8. 2 xil sintaksis <br />
    typeof(x) <br />
    typeof x  <br />

9. JavaScript-da 8 ta asosiy ma'lumotlar turi mavjud.
    number <br />
    string <br />
    bigint <br />
    boolean <br />
    null <br />
    undefined <br />
    symbol <br />
    object <br />

10. prompt ikkita argumentni qabul qiladi: <br />
    prompt -> foydalanuvchidan matn kiritishni so'ragan xabarni ko'rsatadi <br />
    result = prompt(title, [default]);  

11. confirm ikkita tugmachali modal oynani ko'rsatadi question: OK va Bekor qilish. <br />
    Natija, OK bosilsa true aks holda false
    <br />
    let isBoss = confirm("Are you the boss?"); <br />
    alert( isBoss ); // true if OK is pressed

12. Type Conversions
    String Conversion -> String(value), `${value}`;, value + '', JSON.stringify(value); value.toString();
    
    Boolean Conversion -> Boolean(value)
    Boolean Conversion qoidasi:
        Intuitiv ravishda "bo'sh" bo'lgan, 0, bo'sh string, null, undefined va NaN kabi qiymatlar false bo'ladi.
        Boshqa valuelar true aylanadi.
        
    Numeric Conversion -> 
        Number(str),  <br />
        "6" / "2",  <br />
        parseInt(str),  <br />
        parseFloat(str),  <br />
        +'12',  <br />
        str * 1,  <br />
        ~~str <br />
    
    Numeric Conversion qoidalari:        
        undefined -> NaN <br /> 
        null -> 0 <br /> 
        true and false -> 	1 va 0 <br /> 
        string -> Boshidan va oxiridagi bo'shliqlar (bo'shliqlar, yorliqlar \t, yangi qatorlar va boshqalarni o'z ichiga  <br /> oladi) olib tashlanadi. \n Qolgan qator bo'sh bo'lsa, natija 0. Aks holda, raqam satrdan "o'qiladi". Xato beradi NaN.

13. let b=2, a=1;
    let c = 3 - (a = b + 1); // 0

14. null == undefined // true <br />
    null > 0 // false <br />
    null == 0 // false <br />
    NaN === NaN // false <br />
    null >= 0 // true <br />
    undefined || null || 0 -> // 0 (all falsy, returns the last value) <br />
    !!"non-empty string" // true <br />
    !!null // false

15. Ularning orasidagi muhim farq shundaki:
    || birinchi haqiqiy qiymatini qaytaradi.
    ?? birinchi belgilangan qiymatni qaytaradi.

16. null ?? NaN ?? 50 -> NaN

17. Object propertisida for, let kabi keylardan foydalanda buladi lekin uzgaruvchilarda emas.
    let obj = {
     for: 1,
     let: 2,
     return: 3
};

18. in operatori orqali objectda biz surayotgan key mavjud yoki yuqligini tekshirish mumkn
    "key" in obj.

19. for in <br />
    for (let key in user) { <br />
        alert( key );  // name, age, isAdmin <br />
        alert( user[key] ); // John, 30, true <br />
}
<br />
ex-2:
    let codes = { <br />
        "49": "Germany", <br />
        "41": "Switzerland", <br />
        "44": "Great Britain", <br />
        // .., <br />
        "1": "USA" <br />
    };

    for in key larni o`sish tartibida chiqaradi. 
        for (let code in codes) {
            alert(code); // 1, 41, 44, 49
        }

20. Cloning and merging, Object.assign -> shallow copy <br />
    1-way. <br />
    let user = {
        name: "John",
        age: 30
    };  

    let clone = {}; // the new empty object

    // let's copy all user properties into it
    for (let key in user) {
        clone[key] = user[key];
    }
<br />
    2-way. <br />
    let user = {
      name: "John",
      age: 30
    };

    let clone = Object.assign({}, user);
<br />
    3-way. <br />
    spread operator
    { ...user }


21. Nested cloning -> deep copy <br />
    nested cloningda object assign xato ishlaydi uni urniga biz <b>structuredClone</b> foydalanamiz

    let user = {
        name: "John",
        sizes: {
            height: 182,
            width: 50
        }
    };

    let clone = structuredClone(user);

    user.sizes.width = 60;    // user size uzgardi lekin cloneda uzgarmadi
    alert(clone.sizes.width); // 50,

22. Garbage collection <br />
    let user = {
        name: "John"
    };
  
    let admin = user;
    user = null

    console.log(user.name); //error
    console.log(admin.name); // John

    ikkalasi ham bir xil manzilga murojjat qilsa ham lekin user=null bulganda admin qolaveradi

23. Objectda this bu objectni uziga teng buladi <br />  
    let user = {
        name: "John",
        age: 30,

        sayHi() {
          // "this" is the "current object"
          alert(this.name);
        }
    };

    user.sayHi(); // John

24. Konstruktor funktsiyalari yoki qisqacha aytganda, konstruktorlar oddiy funktsiyalardir, lekin ularni avval bosh harf   
    bilan nomlash bo'yicha umumiy kelishuv mavjud.
    Konstruktor funktsiyalari faqat <b>new</b> yordamida chaqirilishi kerak.  

25. Optional chaining ? oraliq xususiyat mavjud bo'lmasa ham, 
    o'rnatilgan ob'ekt xususiyatlariga kirishning xavfsiz usulidir.
    
    ?.() mavjud bo'lmagan funksiyani chaqirish uchun ishlatiladi. <br />
    let userAdmin = {
        admin() {
            alert("I am admin");
        }
    };

    userAdmin.admin?.(); // I am admin

    Optional chaing ? sintaksis uchta shaklga ega:

    obj?.prop- obj.propagar objmavjud bo'lsa, qaytaradi, aks holda undefined. <br />
    obj?.[prop]- obj[prop]agar objmavjud bo'lsa, qaytaradi, aks holda undefined. <br />
    obj.method?.()– obj.method()agar obj.methodmavjud bo'lsa qo'ng'iroq qiladi, aks holda qaytaradi undefined.
    
26. Symbol orqali objectga key yaratganimzda ular for kabi looplarda kurinmaydi.
    
    Belgilar bir xil nomga ega bo'lsa ham, har doim turli xil qiymatlardir. Agar biz bir xil nomdagi belgilar teng bo'lishini xohlasak, global registrdan foydalanishimiz kerak: nomi sifatida Symbol.for(key)global belgini qaytaradi (kerak bo'lsa yaratadi) . Bir xil bo'lgan keybir nechta qo'ng'iroqlar aynan bir xil belgini qaytaradi.Symbol.forkey
    
    let id = Symbol.for("id");
    let id2 = Symbol.for("id");
    console.log(id === id2);

    Symbol.toPrimitive obyektni pirmitve tipga convertatsiya qilishga ruxsat beradi

27. alert( typeof 0 ); // "number"
    alert( typeof new Number(0) ); // "object"!

28. toString(base) -> base 2 dan 36 gacha
    
    exmaple
    let num = 255;

    alert( num.toString(16) );  // ff
    alert( num.toString(2) );   // 11111111

29. isNaN(value) -> value ni numnerga convertatsiya qiladi va NaN bilan tekshiradi.

30. arr.at(i): <br />

    agar i >= 0 bo‘lsa, arr[i] bilan aynan bir xil.
    i ning manfiy qiymatlari uchun u massiv oxiridan orqaga qadam tashlaydi.

    let fruits = ["Apple", "Orange", "Plum"];
    alert( fruits.at(-1) ); // Plum

31. Push/pop usullari tez ishlaydi, shift/unshift esa sekin. <br />
    sababi shift/unshift qushganda va ushirganda indexlarni surilishiga vaqt ketadi

32. Massivlarda Symbol.toPrimitive ham, valueOf ham mavjud emas, <br />
    ular faqat toString konversiyasini amalga oshiradi, <br />
    shuning uchun bu erda [] bo'sh satrga aylanadi, [1] "1" ga aylanadi va [1,2] "1,2" ga aylanadi. <br />

    alert( [] + 1 ); // "1" <br />
    alert( [1] + 1 ); // "11" <br />
    alert( [1,2] + 1 ); // "1,21"

33. splice() -> arr.splice(start[, deleteCount, elem1, ..., elemN]) <br />
    slice([start], [end])

34. find() -> shart bajariladigan 1 ta 1-elemntni qaytaradi <br />
    filter() -> shart bajariladigan hammasini

35. Map - bu xuddi Object. Ammo asosiy farq shundaki, Maphar qanday turdagi kalitlarga ruxsat beriladi. <br />
    
    hattoki key sifatida objectni ham olishi mumkin: <br />
    
    let john = { name: "John" };
    let visitsCountMap = new Map();
    visitsCountMap.set(john, 123);
    alert( visitsCountMap.get(john) ); // 123

    mapni aylanishni 3 ta usul mavjud: <br />

    map.keys()– kalitlar uchun iteratsiyani qaytaradi,
    map.values()– qiymatlar uchun iteratsiyani qaytaradi,
    map.entries()– yozuvlar uchun iteratsiyani qaytaradi [key, value], u sukut boʻyicha for..of.

36. Set- bu maxsus turdagi to'plam - "qiymatlar to'plami" (kalitlarsiz), unda har bir qiymat faqat bir marta bo'lishi mumkin.

37. Map va WeakMap o'rtasidagi birinchi farq shundaki, kalitlar pirmitive qiymatlar emas, balki ob'ektlar bo'lishi kerak:
    va Map uzida garbage collection saqlaydi. weakmap emas

38. WeakSet Setga o'xshaydi, lekin biz faqat ob'ektlarni qo'shishimiz mumkin WeakSetga(pirmitivlarni emas).

39. Object.keys, values, entries <br />
    let user = {
        name: "John",
        age: 30
    };
    <br />
    Object.keys(user) = ["name", "age"] <br />
    Object.values(user) = ["John", 30] <br />
    Object.entries(user) = [ ["name","John"], ["age",30] ]

40. Rekursiv function - uzini uzi chaqiradigan function <br />

41. Closure -> Tashqi variablelarni eslab turadi va ularga kira oladigan functiondir. <br />
    
42. IIFE (immediately-invoked function expressions) -> darhol chaqiradigan function. <br />
    
43. var o'zgaruvchilari blok scope ega emas, ularning ko'rinishi joriy funktsiyaga yoki global <br />
    
44. JavaScript-da funksiyalar ob'ektlardir. <br />
    function f1(a) {} <br />
    alert(f1.length); // 1 <br />

45. call, apply -> context biriktirish uchun ishlatamiz. <br />
    func.call(context, arg1, arg2, ...) -> argumentlarni alohida oladi <br />
    func.apply(context, args) -> argumentlarni massiv shaklida oladi <br />

46. Dekorator - bu funksiyaning harakatini o'zgartiradigan o'rash. <br />

47. CallBack sifatida obyekt ichidagi methodlarni yuborsak this context yuqoladi. <br />
    1-yechim <br />
    Callbackni functiona uraymiz <br />
    
    1. setTimeout(<b>function() { <br />
        user.sayHi(); // Hello, John! <br />
    },</b> 1000); <br />

    2. setTimeout(() => user.sayHi(), 1000); // Hello, John! <br />
    
    2-yechim:  func.bind(context, [arg1], [arg2], ...); <br />
    `
    let user = {
        firstName: "John"
    };

    function func() {
      alert(this.firstName);
    }

    let funcUser = func.bind(user);
    funcUser(); // John
`

48. `
    Ob'ekt xususiyatlari, qiymatdan tashqari, uchta maxsus atributga ega ("bayroqlar" deb ataladi):

    writable - agar rost bo'lsa, qiymat o'zgartirilishi mumkin, aks holda u faqat o'qish uchun.
    enumerable - agar rost bo'lsa, u holda tsikllar ro'yxatiga kiritiladi, aks holda ro'yxatga kiritilmaydi.
    configurable - agar rost bo'lsa, xususiyat o'chirilishi mumkin va bu atributlar o'zgartirilishi mumkin, aks holda emas.

    let user = {
      name: "John"
    };

    Object.defineProperty(user, "name", {
      writable: false
    });

    user.name = "Pete"; // Error: Cannot assign to read only property 'name'

    OBJni clone ham qilsak buladi. -> Shallow copy
    <b>let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));</b>
`

49. `Sealing an object globally:
    
    Object.preventExtensions(obj) -> Ob'ektga yangi xususiyatlar qo'shishni taqiqlaydi.
    
    Object.seal(obj) -> Xususiyatlarni qo'shish/o'chirishni taqiqlaydi. configurable: false
    
    Object.freeze(obj) -> Xususiyatlarni qo'shish/o'chirish/o'zgartirishni taqiqlaydi. configurable: false, writable: false
    
    Object.isExtensible(obj) -> property qushib bulmasa false, aks holda true qaytaradi
    
    Object.isSealed(obj) -> Agar propertini qushib/uchirib bulmasa true, aks holda false
    
    Object.isFrozen(obj) -> qushish, uzgartirish, uchirib bulmasa true, aks holda false
`

50.  `Getter and Setter in Obj
    ex-1
    let user = {
      name: "John",
      surname: "Smith",

      get fullName() {
        return `${this.name} ${this.surname}`;
      },

      set fullName(value) {
        [this.name, this.surname] = value.split(" ");
      }
    };

    // set fullName is executed with the given value.
    user.fullName = "Alice Cooper";

    alert(user.name); // Alice
    alert(user.surname); // Cooper

    ex-2:
    function User(name, birthday) {
      
      this.name = name;

      this.birthday = birthday;

      Object.defineProperty(this, "age", {

        get() {

          let todayYear = new Date().getFullYear();

          return todayYear - this.birthday.getFullYear();
        
        }
      
      });
    
    }

    let john = new User("John", new Date(1992, 6, 1));

    alert( john.birthday );

    alert( john.age );  
`

51. `Prototype:
    
    Faqat ikkita cheklov mavjud:

    1. Ma'lumotnomalar aylana bo'ylab yura olmaydi. Agar biz __proto__ ni doira 
    ichida belgilashga harakat qilsak, JavaScript xato qiladi.

    2. __proto__ qiymati ob'ekt yoki null bo'lishi mumkin. Boshqa turlar e'tiborga olinmaydi.
    
    for in orqali objectni ham prototypedagi objectni ham keylarni olish mumkn, Object.keys()
    orqali buni qilib bulmay u faqat objetni uzini keylarini olib beradi.

    obj.hasOwnProperty(key): haqiqiy objectdagi key bor yuqligini tekshiradi, agar bor bulsa true aks holda false.

    *JS da barcha objectlarda yashiringan prototype buladi. ular yoki object yoki null buladi

    *Biz ularga obj.__proto__ orqali kirishimiz mumkn.

    *Agar biz obj.method() ni chaqirsak va usul prototipdan olingan bo'lsa, this hali ham objga murojaat qiladi. Shunday qilib, methodlar meros qilib olingan bo'lsa ham, har doim joriy ob'ekt bilan ishlaydi.
    `
52. `F.prototype:

    Esda tutingki, yangi ob'ektlar konstruktor funktsiyasi bilan yaratilishi mumkin, masalan, new F().

    Agar F.prototype ob'ekt bo'lsa, u holda new operatori yangi ob'ekt
    uchun [[Prototip]] ni o'rnatish uchun foydalanadi.

    Biz konstruktor functionni yaratdik lekin new kalit suzi bilan chqairmasak unga prototypeni
    o'rnatib bulmaydi.

    example:

    let animal = {

      eats: true

    };

    function Rabbit(name) {

      this.name = name;
    
    }

    Rabbit.prototype = animal;

    let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

    alert( rabbit.eats ); // true
`

53. `
    function Rabbit() {}

    Rabbit.prototype = {

      eats: true
    
    };

    let rabbit = new Rabbit();

    *delete Rabbit.prototype.eats; // prototypedagi eatsni uchiradi

    *Rabbit.prototype.eats = false; // rabbit.eats = false

    *Rabbit.prototype = {}; -> hech narsa uzgarmaydi
    
    *delete rabbit.eats; -> hech narsa uzgarmaydi
`

54. {} = new Object() buladi
    
    *Object.getPrototypeOf(obj) – objning [[Prototip]] ni qaytaradi.
    
    *Object.setPrototypeOf(obj, proto) – obj ning [[Prototype]] ni protoga o'rnatadi.

    *Object.create(proto, [descriptors]) – [[Prototip]] sifatida berilgan proto va ixtiyoriy xususiyat identifikatorlari bilan bo'sh ob'ekt yaratadi.

    *let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)); -> obj uchun shallow copy

    example:

    let animal = {

        eats: true

    };

    let rabbit = Object.create(animal); // same as {__proto__: animal} create a new object with animal as a prototype

55. `
    * Protected maydonlar _ bilan boshlanadi. Bu til darajasida qo'llanilmagan taniqli konventsiya. Dasturchilar faqat uning sinfidagi _ bilan boshlanadigan maydonga va undan meros qolgan sinflarga kirishlari kerak.

    * private maydonlar # bilan boshlanadi.    
`

56. `The instanceof operator

    * obj instanceof Class -> object klassga tegishl bulsa true qaytaradi

    * {}.toString.call() == typeof
`

57. `mixin - bu boshqa sinflar tomonidan meros qilib olinishi kerak bo'lmagan holda    
    ishlatilishi mumkin bo'lgan usullarni o'z ichiga olgan sinf.

    Ba'zi boshqa tillar bir nechta merosga ruxsat beradi. JavaScript bir nechta merosni qo'llab-quvvatlamaydi, ammo miksinlarni prototipga nusxalash methodlar orqali amalga oshirish mumkin.

    ex:

    // mixin
    let sayHiMixin = {
      sayHi() {
        alert(`Hello ${this.name}`);
      },
      sayBye() {
        alert(`Bye ${this.name}`);
      }
    };

    // usage:
    class User {
      constructor(name) {
        this.name = name;
      }
    }

    // copy the methods
    Object.assign(User.prototype, sayHiMixin);

    // now User can say hi
    new User("Dude").sayHi(); // Hello Dude!
`

58. ` try catch <br />
    * try...catch konstruktsiyasida yana bitta kod bandi bo'lishi mumkin: finally.

        Agar u mavjud bo'lsa, u barcha holatlarda ishlaydi:

        1. agar xato bo'lmasa, trydan so'ng: try -> finally.
        2. agar xatolar bo'lsa, catchdan keyin. try -> catch -> finally. 

    * Global catch
        window.onerror = function(message, url, line, col, error) {
          // ...
        };
`

59. ` Promises
    
    Promise chaining-then zanjiri orqali utadi.

    Agar .then (yoki catch/finally) promise qaytarsa, zanjirning qolgan qismi promise hal bo'lguncha kutadi. Bu sodir bo'lganda, uning resulti (yoki errori) keyingi uzatiladi.

    * Promise.all  -> barcha promiselar bajarilguncha kutadi va hammasini 1 vaqtda qaytaradi
    * Agar promise.all da 1 ta promise reject bulsa usha zahoti promise.all ham reject buladi.
    * Promise.race -> Promise.all ga o'xshash, lekin faqat birinchi hal qilingan va'dani kutadi va uning natijasini (yoki xatosini) oladi.
    * Promise.any-> Promise.race ga o'xshaydi, lekin faqat birinchi bajarilgan va'dani kutadi va uning natijasini oladi.
    * Promise.allSettled -> natijasi qanday bo'lishidan qat'i nazar, barcha va'dalarning bajarilishini kutadi.
`

60. `async/await
    
    * Funksiya oldidagi "async" so'zi bitta oddiy narsani anglatadi: funktsiya har doim va'dani qaytaradi. Boshqa qiymatlar avtomatik ravishda hal qilingan va'daga o'raladi.
    * await kalit so'zi JavaScript-ni bu va'da bajarilguncha kutishga majbur qiladi va natijani qaytaradi.
    * Agar biz bir vaqtning uzida kup vadani kutsak Promise.all yaxshi.
`

61. ` Generator function
    
    * Generatorlar talab bo'yicha birin-ketin bir nechta qiymatlarni ("hosil") qaytarishi mumkin. Ular ma'lumotlar oqimini osonlik bilan yaratishga imkon beruvchi iterativlar bilan ajoyib ishlaydi. 
    * .next() orqali qiymatlarni olsak buladi
```
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
    }

    let generator = generateSequence();

    let one = generator.next();
    let two = generator.next()

    console.log(JSON.stringify(one)); //{"value":1,"done":false}
    console.log(JSON.stringify(two)); //{"value":2,"done":false}
```
`

62. `Generator functionlarni iteratsiya qilish.
    ```
    * 1-way: for..of orqali
        function* generateSequence() {
          yield 1;
          yield 2;
          yield 3;
        }

        let generator = generateSequence();

        for(let value of generator) {
          alert(value); // 1, then 2, then 3
        }
        
    * 2-way: ... spread operatori orqali
        function* generateSequence() {
          yield 1;
          yield 2;
          yield 3;
        }

        let sequence = [0, ...generateSequence()]; // [0, 1, 2, 3]
    ```
`

63. Eval: run a code -> stringdagi kodlarni uqish uchun 
```
    let code = 'alert("Hello")';
    eval(code); // Hello
```

64. * Currying - funksiyani f(a, b, c) deb chaqiriladigan funksiyadan f(a)(b)(c) kabi   chaqiriladigan funksiyaga aylantiruvchi funksiyalarning transformatsiyasi.
    * Currying bizga qismlarni osongina olish imkonini beradi. argumentlardan
    `
    function curry(f) { // curry(f) does the currying transform
      return function(a) {
        return function(b) {
          return f(a, b);
        };
      };
    }

    // usage
    function sum(a, b) {
      return a + b;
    }

    let curriedSum = curry(sum);

    alert( curriedSum(1)(2) ); // 3
`

65. Bubbling
    
    * Elementda event sodir bo'lganda, u avval uzida ishlaydi, so'ngra otasida, so'ngra boshqa ajdodlar ustida ishlaydi.

```
    <form onclick="alert('form')">FORM // 3-ishlaydi
      <div onclick="alert('div')">DIV  // 2-ishlaydi
        <p onclick="alert('p')">P</p> // 1-ishlaydi
      </div>
    </form>
```

66. HTML lifecicles
    * DOMContentLoaded hodisasi - DOM tayyor, shuning uchun ishlov beruvchi DOM tugunlarini qidirishi, interfeysni ishga tushirishi mumkin.
    yuklanish hodisasi - tashqi resurslar yuklanadi, shuning uchun uslublar qo'llaniladi, tasvir o'lchamlari ma'lum va hokazo.

    * beforeunload hodisasi - foydalanuvchi ketmoqda: biz foydalanuvchi o'zgarishlarni saqlaganligini tekshirib ko'rishimiz va ulardan haqiqatan ham ketishni xohlashini so'rashimiz mumkin.

    * unload - foydalanuvchi deyarli tark etdi, lekin biz hali ham ba'zi operatsiyalarni boshlashimiz mumkin, masalan, statistikani yuborish.

67. async / defer
    * Skriptlar ularning ostidagi DOM elementlarini ko'ra olmaydi, shuning uchun ular ishlov beruvchilarni qo'sha olmaydi va hokazo.
    
    * Agar sahifaning yuqori qismida katta hajmli skript bo'lsa, u "sahifani bloklaydi". Foydalanuvchilar sahifa mazmunini yuklab olinmaguncha va ishga tushmaguncha ko‘ra olmaydi:

    * Defer atributi brauzerga skriptni kutmaslikni aytadi. Buning o'rniga, brauzer HTMLni qayta ishlashni davom ettiradi, DOMni yaratadi. Skript "background"da yuklanadi va DOM to'liq qurilganida ishlaydi.
    
    * Defer bilan skriptlar hech qachon sahifani bloklamaydi.
    
    * Defer bilan skriptlar har doim DOM tayyor bo'lganda (lekin DOMContentLoaded hodisasidan oldin) bajariladi.
    
    * async skriptlar backgroundda yuklanadi va tayyor bo'lganda ishlaydi. DOM va boshqa skriptlar ularni kutishmaydi. Yuklanganda ishlaydigan to'liq mustaqil skript.
  
68. * Asosiy ikkilik ob'ekt ArrayBuffer - doimiy uzunlikdagi qo'shni xotira maydoniga havola.
    
69. WebSocket - doimiy brauzer-server ulanishiga ega bo'lishning zamonaviy usuli.

    * WebSockets cross-origin cheklovlariga ega emas.
    * Ular brauzerlarda yaxshi qo'llab-quvvatlanadi.
    * Satrlar va ikkilik ma'lumotlarni yuborish/qabul qilish mumkin.

70. localstorage

    * Xuddi shu manbadagi barcha tablar va windowlar oʻrtasida taqsimlanadi.

    * Ma'lumotlar muddati tugamaydi. Brauzer qayta ishga tushirilgandan va hatto OS qayta ishga tushirilgandan keyin ham qoladi.

71. sessionStorage

 * SessionStorage faqat joriy brauzer tabida mavjud.

 * Xuddi shu sahifaga ega bo'lgan boshqa tabda boshqa xotira bo'ladi.

 * Lekin u bir xil yorliqdagi iframe-lar o'rtasida taqsimlanadi (ular bir xil kelib chiqishidan kelib chiqqan holda).

 * Ma'lumotlar sahifani yangilashdan omon qoladi, lekin yorliq yopilmaydi/ochilmaydi.

72. Cookie, localstorage va sessionstorage o'rtasidagi farqlar qanday?
    <img src='/localandseccion.png' alt='local'/>

73. ```var myFunc = function(){

    }```

    da hoisting bulmaydi.

74. Class ichida yaratilgan static methodlar classni uziga tegishli bo'ladi, u orqali yaratilgan objectga emas.
     ```class Car {
        constructor(){

        }

        static start(){

        }
     }
     Car.start();
     ```

75. **JavaScript'da inkapsulyatsiya**, obyektning ichki holati (xususiyatlar) va harakatlari (metodlar)ni tashqariga nisbatan yashirin qilishdir. Bu, obyektni ichki mantiqiga tashqari holati almashtirilmasligini anglatadi. Ushbu maqsadda quyidagi chora-tadbirlar amalga oshiriladi:

    * Private variablelar va Metodlar:** Sinfdagi faqat sinf o'zidan murojaat qilinishi mumkin bo'lgan maxsus o'zgaruvchilar va metodlar ishlatiladi.
