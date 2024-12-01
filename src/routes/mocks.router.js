import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const mocksRouter = Router();

mocksRouter.get("/mockingpets", mocksController.getMockingPets);
mocksRouter.get("/mockingusers", mocksController.getMockingUser);
mocksRouter.post('/generatedata', mocksController.generateData);

export default mocksRouter;