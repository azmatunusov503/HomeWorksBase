'use strict';
function checkInput(event) {
	const { which, code } = event;
	if ((which < 48 || which > 57) && code != 'Backspace' && code != 'Enter') {
		event.preventDefault();
		return;
	}
}

function expression(sign, a, b) {
	switch (sign) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			return a / b;
		default:
			return null;
	}
}

document.querySelectorAll('.input').forEach(input => {
	input.addEventListener('keydown', checkInput);
});

document.querySelectorAll('.button').forEach(button =>
	button.addEventListener('click', () => {
		const sign = button.innerText;
		const num1Doc = document.querySelector('.num1');
		const num2Doc = document.querySelector('.num2');
		if (num1Doc.value === '' || num2Doc.value === '') {
			console.log('Поле не заполнен');
			return;
		}
		const num1 = Number(num1Doc.value);
		const num2 = Number(num2Doc.value);
		document.querySelector('.panel').innerText =
			`${num1} ${sign} ${num2} = ${expression(sign, num1, num2)}`;
		num1Doc.value = '';
		num2Doc.value = '';
	})
);
