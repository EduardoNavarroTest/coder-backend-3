//No necesitamos traer un DAO en particular para testear toda la aplciación
import supertest from "supertest";
import chai from "chai";


const expect = chai.expect;

const request = supertest("http://localhost:8080");

describe("Test API", () => {

    describe("Test Mascotas", () => {

        it("Endopoint GET /api/pets debe crear una mascota", async () => {
            const ramboMock = {
                name: "Rambo",
                specie: "Perro",
                birthDate: "12-30-2000",
            }
            const { statusCode, ok, _body } = await request.post("/api/pets").send(ramboMock);
            expect(_body.payload).to.have.property("_id");
        })
    });




});