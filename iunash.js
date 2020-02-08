
// Task 1, 2

let inputIn = document.querySelector('.inputIn');
let out = '';

function test() {

	let num = inputIn.value;
	if (num > 7) {
		out = 'Привет';
	}
	else if (num == 'Вячеслав') {
		out = 'Привет, Вячеслав';
	}
	else {
		out = 'Нет такого имени';
	}

	inputIn.value = '';

	document.querySelector('.out').innerHTML = out;
}
document.querySelector('button').onclick = test;

// Task 3

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let newArr = [];
let out2 = '';

function test2() {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 3 == 0) {
			out2 += newArr.push(arr[i]) + ' ';
		}
	}

	document.querySelector('.out-2').innerHTML = out2;
}
document.querySelector('.btn').onclick = test2;

