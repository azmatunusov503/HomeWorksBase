/* <- === === === === === === === === === === === === === === === === === === === ===  Домашнее задание  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
	Дан массив строк ['10-02-2022', 'test', '11/12/2024', '00/13/2022', '41/12/2025'];
	Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату
 (можно: '10-02-2022' и '11/12/2024') и возвращает новый массив вида: - ['10-02-2022', '12-11-2024]
=== */
// Code
const arrDate = ['31-2-2022', 'test', '11/12/2024', '00/13/2022', '41/12/2025'];

function isValidDate(inputArr) {
	return (
		inputArr[0] > 0 && inputArr[0] <= 31 && inputArr[1] > 0 && inputArr[1] <= 12
	);
}

function filterValidDate(arr) {
	const resultArray = [];
	const filterArray = arr
		.filter(
			str =>
				Array.from(str).filter(sign => sign === '/' || sign === '-').length >= 2
		)
		.map(el => el.split(/[-/]/))
		.forEach(data => {
			if (isValidDate(data)) {
				resultArray.push(
					`${data[0].padStart(2, '0')}-${data[1].padStart(2, '0')}-${data[2]}`
				);
			}
		});
	return resultArray;
}
console.log(filterValidDate(arrDate));
