import { faker } from '@faker-js/faker';
import { createHash } from '../utils/index.js';

class MockingService {
    
    static async generateMockingPets(num) {

        const pets = [];

        for (let i = 0; i < num; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopter: false,
                brithDate: faker.date.birthdate(),
                image: faker.image.urlPicsumPhotos()
            })
        }

        return pets;
    }

    static async generateMockingUsers(num) {

        const users = [];

        for (let i = 0; i < num; i++) {
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: await MockingService.generateRandomRole(),
                pets: []
            })
        }

        return users;

         

    }

    static async generateRandomRole() {
        const roles = ["user", "admin"];
        return roles[Math.floor(Math.random() * roles.length)];
    }
}

export default MockingService
