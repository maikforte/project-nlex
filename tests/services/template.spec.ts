import templateService from "../../services/template.service";
import { expect } from "chai";

describe("Template Controller", () => {

	describe(".getAll()", () => {
		it("should return a list", async () => {
			const returnValue = await templateService.getAll();
			expect(returnValue).to.be.an("array");
		});
	});

	describe(".getOne(id: number)", () => {
		it("should return an object", async () => {
			const returnValue = await templateService.getOne(1);
			expect(returnValue).to.be.an("object");
		});
		it("should contain an id", async () => {
			const returnValue = await templateService.getOne(1);
			expect(returnValue).to.have.property("id");
		});
		it("should have the same id as parameter", async () => {
			const id = 1;
			const returnValue = await templateService.getOne(id);
			expect(returnValue).to.have.property("id").equal(id);
		});
	});

	describe(".createNew(data: object)", () => {
		it("should return an object", async () => {
			const returnValue = await templateService.createNew({});
			expect(returnValue).to.be.an("object");
		});
		it("should contain an id", async () => {
			const returnValue = await templateService.createNew({});
			expect(returnValue).to.have.property("id");
		});
	});

	describe(".updateOne(id: number, data: object)", () => {
		it("should return an object", async () => {
			const returnValue = await templateService.updateOne(1, {});
			expect(returnValue).to.be.an("object");
		});
		it("should contain an id", async () => {
			const returnValue = await templateService.updateOne(1, {});
			expect(returnValue).to.have.property("id");
		});
		it("should have the same id as parameter", async () => {
			const id = 1;
			const returnValue = await templateService.updateOne(id, {});
			expect(returnValue).to.have.property("id").equal(id);
		});
	});

	describe(".deleteOne(id: number)", () => {
		it("should return an object", async () => {
			const returnValue = await templateService.deleteOne(1);
			expect(returnValue).to.be.an("object");
		});
		it("should contain an id", async () => {
			const returnValue = await templateService.deleteOne(1);
			expect(returnValue).to.have.property("id");
		});
		it("should have the same id as parameter", async () => {
			const id = 1;
			const returnValue = await templateService.deleteOne(id);
			expect(returnValue).to.have.property("id").equal(id);
		});
	});
});
