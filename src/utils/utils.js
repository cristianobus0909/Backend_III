import { faker } from "@faker-js/faker";
import { createHash } from "./index.js";

export const generateMockingOwner = () =>{
    const user = {
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        phone:  faker.phone.number(),
        email: faker.internet.email(),
        password: createHash("coder123"),
        role: (Math.random() > 0,5 ? "user": "admin"),
        pet: []
    }
    return user;
}



export const generateMockingPets = ()=>{
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.animal.petName(),        
        breed: faker.animal.type(),
        owner: "",
        adopted: false
    }
}

