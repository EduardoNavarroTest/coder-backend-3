// Importaciones necesarias
import User from "../dao/Users.dao.js";
import mongoose from "mongoose";
import assert from "assert";

// Configuración de la conexión a MongoDB
mongoose.connect(
    `mongodb+srv://eduardonavarrotest:coderhouse@cluster0.rmlvyfc.mongodb.net/Veterinaria?retryWrites=true&w=majority&appName=Cluster0`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Manejo de eventos para la conexión a MongoDB
mongoose.connection.on("connected", () => {
    console.log("MongoDB conectado exitosamente");
});

mongoose.connection.on("error", (err) => {
    console.error("Error al conectar a MongoDB:", err);
});

describe("Test DAO users", function () { 
    this.timeout(10000); 

    let usersDao;

    before(async () => {
        usersDao = new User();
    });

    it("Get all users", async function () { 
        this.timeout(10000); 
        const users = await usersDao.get();
        assert.strictEqual(Array.isArray(users), true);
    });

    it("Get user by email", async function () {
        this.timeout(10000);
        const emailFind = "laura@example.com";
        const user = await usersDao.getBy({ email: emailFind });
        assert.strictEqual(typeof user, "object");
    });

    it("Create user", async function () {
        this.timeout(10000);
        const user = await usersDao.save({
            first_name: "Eduardo",
            last_name: "Navarro",
            email: "eduardonavarronuevo@example.com",
            password: "123456",
        });
        assert.ok(user._id);
    });

    it("Validate user array pets empty", async function () {
        this.timeout(10000);
        const user = await usersDao.save({
            first_name: "Laura",
            last_name: "Navarro",
            email: "lauranuevo@example.com",
            password: "123456",
        });
        assert.deepStrictEqual(user.pets, []);
    });

    
    after(async () => {
        await mongoose.connection.disconnect();
    });
});
