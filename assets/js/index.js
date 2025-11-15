import { products } from "./products.js";
let x = [];
let items =[];
products.forEach((y)=> {
  items.push(y.tags.place);
});
 console.log(items);
items.forEach((nowItem) => {
    if (x.includes(nowItem)) {
        console.log(nowItem + ": ok");
    } else {
        x.push(nowItem);
    }
});
console.log(x);
