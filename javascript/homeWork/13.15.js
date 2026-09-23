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
	params: {
		search: 'Вася',
		take: 10,
	},
	getQueryParams: function getQuerParams() {
		const keys = Object.keys(this.params);
		return '?' + keys.map(key => `${key}=${this.params[key]}`).join('&');
	},
};

console.log(query.getQueryParams());
