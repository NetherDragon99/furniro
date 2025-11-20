// My tools

import { products } from "./products.js";
let x = [];
let items = [];
products.forEach((y) => {
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


/*const section1Items = document.querySelectorAll('.categoryDescription>div');
section1Items.forEach((v,i) =>{
		v.setAttribute('class',`${i}`);
		v.style.zIndex=`${i}`;
});*/



//section 1

function section1(){
	let selectedSection1Item = 0;
	let selectedSection1ItemLength = document.querySelectorAll('.categoryImage>img').length - 1;
	let section1dirction = 'right';
	console.log(selectedSection1ItemLength);
	document.querySelector(`.section1cards [class="${(selectedSection1Item)}"] img`).style.cssText = 'opacity: 1; transition: 1s';

	const section1motion = () => {
		let tempSection1item = selectedSection1Item;


		if (section1dirction === 'right') {
			document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText = 'opacity: .7; transition: 1s';

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.7); right: 25%; z-index: 9; transition: .9s'
			tempSection1item = checker(tempSection1item + 1);
			//0 >> 6

			document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText = 'opacity: 1; transition: 1s';

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.8); right: 50%; z-index: 10; transition: 1s'
			tempSection1item = checker(tempSection1item + 1);
			//1 >> 0

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.7); right: 75%;; z-index: 9; transition: 1s'
			tempSection1item = checker(tempSection1item + 1);
			//2 >> 1 

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.6); right: 95%; z-index: 8; transition: 1s'
			tempSection1item = checker(tempSection1item + 1);
			//3 >> 2

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.4); right: 110%; z-index: 7; transition: 1s'
			tempSection1item = checker(tempSection1item + 1);
			//4 >> 3

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.4); right: -10%; z-index: 7; transition: .9s'
			tempSection1item = checker(tempSection1item + 1);
			//5 >> 4

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.6); right: 5%; z-index: 8; transition: .9s'
			//6 >> 5


		} else {
			document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText = 'opacity: .7; transition: 1s';

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.7); right: 75%; z-index: 9; transition: .9s'
			tempSection1item = checker(tempSection1item - 1);
			//0 >> 1

			document.querySelector(`.section1cards [class="${(tempSection1item)}"] img`).style.cssText = 'opacity: 1; transition: 1s';

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.8); right: 50%; z-index: 10; transition: 1s'
			tempSection1item = checker(tempSection1item - 1);
			//6 >> 0

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.7); right: 25%; z-index: 9; transition: 1s'
			tempSection1item = checker(tempSection1item - 1);
			//5 >> 6

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.6); right: 5%; z-index: 8; transition: 1s'
			tempSection1item = checker(tempSection1item - 1);
			//4 >> 5

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.4); right: -10%; z-index: 7; transition: 1s'
			tempSection1item = checker(tempSection1item - 1);
			//3 >> 4

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.4); right: 110%; z-index: 7; transition: .9s'
			tempSection1item = checker(tempSection1item - 1);
			//2 >> 3

			document.querySelector(`.section1cards [class="${(tempSection1item)}"]`).style.cssText = 'transform: translateX(50%) scale(0.6); right: 95%; z-index: 8; transition: .9s'
			//1 >> 2
		}
	};
	const imageSwipeS1 = () => {
		let imagenumber = selectedSection1Item;

		document.querySelectorAll(`.categoryImage img`).forEach((v) => {
			v.style.cssText = "opacity: 0;"
		});

		if (section1dirction === 'right') {
			imagenumber = checker(imagenumber +1);
			
			setTimeout(()=>{
				document.querySelector(`.categoryImage [class='${checker(imagenumber)}']`).style.cssText = 'opacity: 1;';
				
			},500)
		} else {
			imagenumber = checker(imagenumber -1);
			
			setTimeout(()=>{
				document.querySelector(`.categoryImage [class='${checker(imagenumber)}']`).style.cssText = 'opacity: 1;';
				
			},500)
		}
	};
	const textswipeS1 = () => {
		let textNumber = selectedSection1Item;

		if (section1dirction === 'right') {
			document.querySelectorAll(`.s1description div`).forEach((v)=>{
				v.style.cssText="transform: translateX(-100%); transition: 1s;";
			})
			setTimeout(()=>{
				document.querySelector(`.s1description [class="${checker(textNumber +1)}"]`).style.cssText="transform: translateX(0); transition: 1s;"
			},500)
		} else {
			document.querySelectorAll(`.s1description div`).forEach((v)=>{
				v.style.cssText="transform: translateX(-100%); transition: 1s;";
			})
			setTimeout(()=>{
				document.querySelector(`.s1description [class="${checker(textNumber -1)}"]`).style.cssText="transform: translateX(0); transition: 1s;"
			},500)
		}

	};
	const checker = (checkItem) => {
		if (checkItem > selectedSection1ItemLength) {
			return 0;
		} else if (checkItem < 0) {
			return selectedSection1ItemLength;
		}
		return checkItem;
	};
	const buttonTimer = () => {
		document.querySelector('.buttonR').style.pointerEvents = 'none';
		document.querySelector('.buttonL').style.pointerEvents = 'none';
		setTimeout(() => {
			document.querySelector('.buttonR').style.pointerEvents = 'auto';
			document.querySelector('.buttonL').style.pointerEvents = 'auto';
		}, 700)
	};

	document.getElementsByClassName('buttonGet')[0].onclick = ()=>{
		console.log(checker(selectedSection1Item));
	};

	document.querySelector('.buttonR').onclick = () => {
		buttonTimer();
		console.log("right");
		selectedSection1Item = checker(selectedSection1Item);
		section1dirction = 'right';
		imageSwipeS1();
		textswipeS1();
		section1motion();
		selectedSection1Item++;
	};
	document.querySelector('.buttonL').onclick = () => {
		buttonTimer();
		console.log("left");
		selectedSection1Item = checker(selectedSection1Item);
		section1dirction = 'left';
		imageSwipeS1();
		textswipeS1();
		section1motion();
		selectedSection1Item--;
	};
}
section1();