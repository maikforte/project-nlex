const templateService = {
	getOne,
	getAll,
	createNew,
	updateOne,
	deleteOne,
};

export default templateService;

async function getOne(id: number) {
	return { id: id, name: `Data with id: ${id}` };
}

async function getAll() {
	return ["Data 1", "Data 2", "Data 3"];
}

async function createNew(data: object) {
	return { id: 1, ...data };
}

async function updateOne(id: number, data: object) {
	return { id: id, ...data };
}

async function deleteOne(id: number) {
	return { id: id };
}
