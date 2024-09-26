ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *
```
//Pete cause there's no local variable to be used for name
-> therefore it goes to the global one