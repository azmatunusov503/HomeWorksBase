/* <- === === === === === === === === === === === === === === === === === === === ===  Scope и this.15.14  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
	Todo list
 Написать объект ToDoList, который хранит в себе задачи
	{
		title: 'Помыть посуду',
		id: 1,
		priority: 1,
	}
	и имеет методы:
	- Добавить задачу
	- Удалить задачу по id
	- Обновить имя или приоритет по id
	- Отсортировать задачи по приоритету
=== */

// Code

const toDoList = {
	tasks: [{ id: 1 }],
	isAbsence(value) {
		return value == '' || value == undefined;
	},
	findTask(id) {
		return this.tasks.find(isTask => isTask.id == id);
	},
	addTask(task) {
		if (!task) return 'Нет ОБЪЕКТА';
		if (this.isAbsence(task.id) || this.isAbsence(task.title)) {
			const resText =
				this.isAbsence(task.id) && this.isAbsence(task.title)
					? 'id, title'
					: this.isAbsence(task.id)
						? 'id'
						: 'title';
			return `Обязательное поле отсутствует: { ${resText} }`;
		}
		if (this.findTask(task.id)) {
			task.title += ' copy';
			this.tasks.push(task);
			return 'Существующая задача';
		}
		this.tasks.push(task);
		return 'successful';
	},
	deleteTask(id) {
		if (!this.findTask(id)) {
			return 'Задачи с таким ид не существует';
		}
		const index = this.tasks.findIndex(isTask => isTask.id == id);
		this.tasks.splice(index, 1);
		return 'successful';
	},
	editTask(id, key, value) {
		if (!this.findTask(id)) return 'Не найден';
		this.tasks.forEach(task => {
			if (task.id == id) task[key] = value;
		});
		return 'successful';
	},
	sortTask(params) {
		this.tasks.sort((a, b) => a[params] - b[params]);
		return 'successful';
	},
};

console.log(toDoList.addTask({ title: 'test' }));
console.log(toDoList.addTask());
console.log(toDoList.addTask({ id: 4 }));
console.log(toDoList.editTask(1, 'priority', 3));
console.log(toDoList.deleteTask(1));
console.log(toDoList.sortTask('priority'));
console.log(toDoList);
