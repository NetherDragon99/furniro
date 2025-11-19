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

//section 1
const section1Items = document.querySelectorAll('.section1cards>div');
section1Items.forEach((v,i) =>{
    v.setAttribute('class',`${i}`)
})

let selectedSection1Item = 0;
let selectedSection1ItemLength = section1Items.length -1;
let section1dirction = 'right';
console.log(selectedSection1ItemLength);

const section1motion = ()=>{
    let tempSection1item = selectedSection1Item;
     
    
    if (section1dirction === 'right') {
        document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText='opacity: .7; transition: 1s';

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(240%) scale(0.8); z-index: 9; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //0 >> 6
        
        document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText='opacity: 1; transition: 1s';

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(140%) scale(1); z-index: 10; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //1 >> 0

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(40%) scale(0.8); z-index: 9; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //2 >> 1 

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(-40%) scale(0.6); z-index: 8; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //3 >> 2

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(-100%) scale(0.4); z-index: 7; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //4 >> 3

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(380%) scale(0.4); z-index: 7; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item +1);
        //5 >> 4

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(320%) scale(0.6); z-index: 8; transition: 1s'
        console.log(tempSection1item);
        //6 >> 5


    } else {
        document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText='opacity: .7; transition: 1s';        

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(40%) scale(0.8); z-index: 9; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //0 >> 1
        
        document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText='opacity: 1; transition: 1s';

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(140%) scale(1); z-index: 10; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //6 >> 0

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(240%) scale(0.8); z-index: 9; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //5 >> 6

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(320%) scale(0.6); z-index: 8; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //4 >> 5

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(380%) scale(0.4); z-index: 7; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //3 >> 4

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(-100%) scale(0.4); z-index: 7; transition: 1s'
        console.log(tempSection1item);
        tempSection1item = checker(tempSection1item -1);
        //2 >> 3

        document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText='transform: translateX(-40%) scale(0.6); z-index: 8; transition: 1s'
        console.log(tempSection1item);
        //1 >> 2
    }
}

const checker = (checkItem)=>{
    if (checkItem > selectedSection1ItemLength) {
        console.log(checkItem);
        return 0;
    }else if (checkItem < 0) {
        return selectedSection1ItemLength;
    }
    return checkItem;
}

const buttonTimer = ()=>{
    document.querySelector('.buttonR').style.pointerEvents = 'none';
    document.querySelector('.buttonL').style.pointerEvents = 'none';
    setTimeout(()=>{
        document.querySelector('.buttonR').style.pointerEvents = 'auto';
        document.querySelector('.buttonL').style.pointerEvents = 'auto';
    },700)
}


document.querySelector('.buttonR').onclick = ()=> {
    buttonTimer();   
    console.log("right");    
    console.log(selectedSection1Item);
    selectedSection1Item = checker(selectedSection1Item);
    section1dirction = 'right';
    section1motion();
    selectedSection1Item ++;
};
document.querySelector('.buttonL').onclick = ()=> {
    buttonTimer();   
    console.log("left");    
    console.log(selectedSection1Item);
    selectedSection1Item = checker(selectedSection1Item);
    section1dirction = 'left';
    section1motion();
    selectedSection1Item --;
};