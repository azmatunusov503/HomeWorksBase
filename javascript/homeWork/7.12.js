/* <- === === === === === === === === === === === === === === === === === === === ===  Домашнее задание  === === === === === === === === === === === === === === === === === === === === -> */
/* === Задача
	Написать функцию, которая получает на вход строку c:
	- суммой средств - 1000
	- валютой средств - руб
	-целевой валютой - доллар $
	Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет. Ставки конвертации хранятся в внутри функции.
=== */
// Code
function getConvertation(amount, inputCurrency, outputCurrency) {
	const currentCourse = getCourseRates(inputCurrency, outputCurrency);
	if (!currentCourse) {
		return null;
	}
	return `Конвертация: ${amount} ${inputCurrency} => ${amount * currentCourse} ${outputCurrency}`;
}

// 1-й вариант
function getCourse(inputCurrency, outputCurrency) {
	const rates = {
		RUB: { USD: 0.01041, EUR: 0.009496, UZS: 132.98 },
		USD: { RUB: 96.06, EUR: 0.91014, UZS: 12755.94 },
		EUR: { RUB: 105.31, USD: 1.1, UZS: 14015.36 },
		UZS: { RUB: 0.00752, USD: 0.000078, EUR: 0.000071 },
	};
	return rates[inputCurrency][outputCurrency];
}

// 2-й вариант
function getCourseRates(inputCurrency, outputCurrency) {
	if (inputCurrency === 'USD') {
		switch (outputCurrency) {
			case 'RUB':
				return 96.06;
			case 'EUR':
				return 0.91014;
			case 'UZS':
				return 12755.94;
		}
	} else if (inputCurrency === 'UZS') {
		switch (outputCurrency) {
			case 'USD':
				return 0.000078;
			case 'RUB':
				return 0.00752;
			case 'EUR':
				return 0.000078;
		}
	} else if (inputCurrency === 'RUB') {
		switch (outputCurrency) {
			case 'USD':
				return 0.01041;
			case 'UZS':
				return 132.98;
			case 'EUR':
				return 0.009496;
		}
	} else if (inputCurrency === 'EUR') {
		switch (outputCurrency) {
			case 'USD':
				return 1.1;
			case 'UZS':
				return 14015.36;
			case 'RUB':
				return 105.31;
		}
	}
}

console.log(getConvertation(100, 'USD', 'RUB'));
