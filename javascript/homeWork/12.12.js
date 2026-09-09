/* <- === === === === === === === === === === === === === === === === === === === ===  Домашнее задание  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
	Написать функцию проверки номера карты алгоритмом Луна.
	В функцию передаётся карта: 4561-2612-1234-5464, а функция возвращает true,
	если карта проходит алгоритм и false, если нет.
=== */

// Code
function deletedSignAtStr(str) {
	return Array.from(str)
		.filter(num => num !== '' && num !== null && !isNaN(num))
		.join('');
}

// 1й вариант
function isValidCardCheck(card) {
	const cardNumArr = Array.from(deletedSignAtStr(card));
	const parity = cardNumArr.length % 2;
	const [multiplyByTow, remains] = [[], []];

	for (let i = 0; i < cardNumArr.length; i++) {
		if (i % 2 == parity) {
			multiplyByTow.push(cardNumArr[i] * 2);
		} else {
			remains.push(+cardNumArr[i]);
		}
	}

	const sum =
		remains.reduce((acc, el) => acc + el) +
		multiplyByTow
			.map(el => (el > 9 ? el - 9 : el))
			.reduce((acc, el) => acc + el);

	return sum % 10 === 0;
}

// 2й вариант
function isValidCardCheckReduce(card) {
	const cardNumArr = Array.from(deletedSignAtStr(card));
	const parity = cardNumArr.length % 2;
	const sum = cardNumArr.reduce((res, num, i) => {
		let digit = Number(num);
		if (i % 2 === parity) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		return (res += digit);
	}, 0);
	return sum % 10 == 0;
}

// 3й вариант
function isValidCardCheckLuhn(ccn) {
	const card = deletedSignAtStr(ccn);
	let sum = 0;
	const parity = card.length % 2;
	for (let i = 0; i < card.length; i++) {
		let digit = Number(card[i]);
		if (i % 2 === parity) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}
		sum += digit;
	}
	return sum % 10 == 0;
}
