// Mocha: es un framework para pruebas unitarias
// Chai: es una libreria para hacer pruebas unitarias

import User from "../dao/Users.dao.js";
import mongoose from "mongoose";
import assert from "assert";
import chai, { expect } from "chai";

mongoose.connect(`mongodb+srv://eduardonavarrotest:coderhouse@cluster0.rmlvyfc.mongodb.net/Veterinaria?retryWrites=true&w=majority&appName=Cluster0`);

describe('Test DAO users CHAI', () => {
    let usersDao;

    before(async () => {
        usersDao = new User();
    });

    // beforeEach(async () => {
    //     await mongoose.connection.collections.users.drop();
    // });
    

    it("Get all users", async () => {
        const users = await usersDao.get();
        expect(Array.isArray(users)).to.be.true;
    });

    it("Get user by email", async () => {
        const emailFind = "qD0y3@example.com";
        const user = await usersDao.getBy({ email: emailFind });
        assert.strictEqual(typeof user, "object");
        expect(user.email).to.be.equal(emailFind);
    });

    it("Create user", async () => {
        const user = await usersDao.save({
            first_name: "Eduardo",
            last_name: "Navarro",
            email: "qD0y3@example.com",
            password: "123456",
        });

        expect(user).to.have.property("_id");

    });

    it("Validate user array pets empty", async () => {    
        const user = await usersDao.save({
            first_name: "Laura",
            last_name: "Navarro",
            email: "laura@example.com",
            password: "123456",
        });
        assert.deepStrictEqual(user.pets, []);
        expect(user.pets).to.deep.equal([]);
    });

    it("Comparación sencilla", ()=>{
        assert.strictEqual(1,1);
    })

    it("Update user", async () => {
        const user = await usersDao.update(
            "qD0y3@example.com",
            { first_name: "Edward" }
        );
        assert.strictEqual(user.email, "qD0y3@example.com");
    });

    it("Delete user", async () => {
        const user = await usersDao.delete("qD0y3@example.com");
        assert.strictEqual(user.email, "qD0y3@example.com");
    });

    after(async () => {
        await mongoose.connection.disconnect();
    });

});