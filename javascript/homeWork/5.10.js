/* === Задача
	Написать код, который при передаче пользователем языка: en, ru, de выводит в консоль соответствующее приветствие на указанном языке.
	Пример: de -> ‘Gutten tag!’
=== */
// Code

function showGreeting(lang) {
	switch (lang) {
		case 'ru':
			return 'Добрый день';

		case 'en':
			return 'Hellow';
		case 'de':
			return 'Guten Tag!';
		default:
			return 'Введен не корректный формат языка';
	}
}
let lang = prompt('Введите язык:').trim().toLowerCase();
console.log(showGreeting(lang));

/* === Вопросы:
Нет
=== */
/* <- === === === === === === === === === === === === === === === === === === === ===  Домашнее задание end  === === === === === === === === === === === === === === === === === === === === -> */
