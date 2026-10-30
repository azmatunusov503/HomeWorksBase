/* <- === === === === === === === === === === === === === === === === === === === ===  Scope и this.15.14  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
	Todo list
 
=== */

// Code

const toDoList = {
	tasks: [{ id: 1 }],

	addTask(inTask) {
		if (this.tasks.find(task => task.id == inTask.id)) return 'Существует';
		this.tasks.push(inTask);
		return 'successful';
	},
	deleteTask(id) {
		const index = this.tasks.findIndex(isTask => isTask.id == id);
		if (index != -1) this.tasks.splice(index, 1);
		return 'successful';
	},
	editTask(id, key, value) {
		this.tasks.forEach(task => {
			if (task.id == id) task[key] = value;
		});
	},
	sortTask(params) {
		this.tasks.sort((a, b) => a[params] - b[params]);
	},
};

const extendedTask = {
	tasks: [
		{
			id: 1,
			name: 'test',
			description: 'opisaniye',
			order: 0,
			priority: 1,
		},
	],
};

const extAddTask = toDoList.addTask.bind(extendedTask);
const extDeletedTask = toDoList.deleteTask.bind(extendedTask);
const extEditTask = toDoList.editTask.bind(extendedTask);
const extSortTask = toDoList.sortTask.bind(extendedTask);

console.log(extAddTask({ id: 1, title: 'test' }));
console.log(extAddTask({ id: 3, title: 'test', priority: 2 }));
console.log(extDeletedTask(1));
console.log(extEditTask(3, 'title', 'Sports'));
console.log(extSortTask('priority'));
console.log(extendedTask);
