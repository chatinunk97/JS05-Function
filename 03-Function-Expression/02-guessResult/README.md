บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // * --> 

```
it will alert ("Execute modal) since showModal === alert()

```js
const showModal = alert();
showModal("Execute modal"); // **
```
Maybe nothing ? since it will treat alert() as a called function
and what calling showModal is doing is [alert()]()
->[alert()||||("Execute modal")]
-> the inside will alert() and then try to alert()() which alert() itself is not
a function so it will error