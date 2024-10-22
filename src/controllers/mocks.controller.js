import MockingService from "../services/mocking.js";

const getMockingPets = async (req, res) => {
    const numPets = 20
    const pets = await MockingService.generateMockingPets(numPets);
    res.json({ status: "success", payload: pets });
};

const getMockingUsers = async (req, res) => {
    const numUsers = 20
    const users = await MockingService.generateMockingUsers(numUsers);
    res.json(users);
};

const generateData = async (req, res) => {
    const numPets = 100
    const numUsers = 100
    const pets = await MockingService.generateMockingPets(numPets);
    const users = await MockingService.generateMockingUsers(numUsers);
    res.json({ pets, users });
};


export default {
    getMockingPets,
    getMockingUsers
};