import MockingService from "../services/mocking.js";
import { usersService, petsService } from "../services/index.js";

const getMockingPets = async (req, res) => {
    const numPets = 100
    const pets = await MockingService.generateMockingPets(numPets);
    res.json({ status: "success", payload: pets });
};

const getMockingUsers = async (req, res) => {
    const numUsers = 500
    const users = await MockingService.generateMockingUsers(numUsers);
    res.json({ status: "success", payload: users });
};

const generateData = async (req, res) => {
    const { pets, users } = req.body;

    try {
        const petsMock = await MockingService.generateMockingPets(pets);
        const usersMock = await MockingService.generateMockingUsers(users);
        
        //Insertar los datos en la base de datos
        await Promise.all([
            petsMock.map(async (pet) => {
                await petsService.create(pet);
            }),
            usersMock.map(async (user) => {
                await usersService.create(user);
            })
        ]);

        res.status(200).send({ status: "success", message: "Data generated successfully" });



    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: error.message });
    }



};


export default {
    getMockingPets,
    getMockingUsers,
    generateData
};