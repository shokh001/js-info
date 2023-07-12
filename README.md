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
