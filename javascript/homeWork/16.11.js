/* <- === === === === === === === === === === === === === === === === === === === ===  Scope и this.15.14  === === === === === === === === === === === === === === === === === === === === -> */
/* === Task
	Todo list
 
=== */

// Code

const toDoList = {
	tasks: [{ id: 1 }],

	addTask(task) {
		this.tasks.push(task);
		return 'successful';
	},
	deleteTask(id) {
		const index = this.tasks.findIndex(isTask => isTask.id == id);
		this.tasks.splice(index, 1);
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
console.log(extendedTask);
