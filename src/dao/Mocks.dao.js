import {generateMockingPets, generateMockingOwner} from '../utils/utils.js'

export default class MockService {

    static async createMockingPets(num) {
        const pets = [];
        for (let index = 0; index < num; index++) {
            pets.push(generateMockingPets());
        }
        return pets;
    }

    static async createMockingOwner(num) {
        const users = [];
        for (let index = 0; index < num; index++) {
            users.push(generateMockingOwner())
        }
        return users;
    }
    
}