/* <- === === === === === === === === === === === === === === === === === === === ===  Объекты.13.15  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
		Написать функцию, которая принимает объект query параметров
	и возвращает строку для вставки:
	{
		search: 'Вася',
		take: 10,
	}
	// search=Вася&take=10
=== */
// Code

const query = {
	search: 'Вася',
	take: 10,
};

function getQueryParams(params) {
	const keys = Object.keys(params);
	return '?' + keys.map(key => `${key}=${params[key]}`).join('&');
}
console.log(getQueryParams(query));
