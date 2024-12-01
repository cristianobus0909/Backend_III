import MockService from "../dao/Mocks.dao.js";


class MocksController {
    constructor() {
        
    }
    getMockingPets = async(req,res)=>{
        
        try {
            const pets = await MockService.createMockingPets(100)
            res.status(200).json(pets);
        } catch (error) {
            console.error("error al obtener los mocks de nascotas",error)
        }
        
    }
    getMockingUser = async(req,res)=>{
        
        try {
            const users = await MockService.createMockingOwner(50)
            res.status(200).json(users);
        } catch (error) {
            console.error("error al obtener los mocks de usuarios",error)
        }
        
    }
    generateData = async(req,res)=>{
        try {
            const {users, pets} = req.body;
            
            const mockUsers = await MockService.createMockingOwner(users);
            console.log(mockUsers);
            const mockpets = await MockService.createMockingPets(pets);
            res.status(200).send({users:mockUsers, pets:mockpets})
        } catch (error) {
            res.status(404).json({message:"error al generar los datos",error});
        }

    }
}

const mocksController = new MocksController()

export default mocksController;