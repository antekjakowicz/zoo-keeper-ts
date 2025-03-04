import AnimalService from '../services/AnimalService.js';
import Animal from "../models/Animal";
import { Request, Response } from "express";

const AnimalsController = {
    async getAllAnimals(req: Request, res: Response) {
        try {
            const animals: Animal[] = await AnimalService.getAnimals();
            res.json(animals);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    },

    async getAnimalById(req: Request, res: Response) {
        try {
            const animal = await AnimalService.getAnimalById(Number(req.params.id));
            res.json(animal);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            }
        }
    },

    async getEndangeredAnimals(req: Request, res: Response) {
        try {
            const animals = await AnimalService.getEndangeredAnimals();
            res.json(animals);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    },

    async getAnimalsByHabitat(req: Request, res: Response) {
        try {
            const animals = await AnimalService.getAnimalsByHabitat(req.params.habitat);
            res.json(animals);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    },

    async getAnimalsBySpecies(req: Request, res: Response) {
        try {
            const animals = await AnimalService.getAnimalsBySpecies(req.params.species);
            res.json(animals);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    },

    async addAnimal(req: Request, res: Response) {
        try {
            const newAnimal = await AnimalService.addAnimal(req.body);
            res.status(201).json(newAnimal);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            }
        }
    },

    async updateAnimal(req: Request, res: Response) {
        try {
            const updatedAnimal = await AnimalService.updateAnimal(Number(req.params.id), req.body);
            res.json(updatedAnimal);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            }
        }
    },

    async deleteAnimal(req: Request, res: Response) {
        try {
            const deletedAnimal = await AnimalService.deleteAnimal(Number(req.params.id));
            res.json(deletedAnimal);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            }
        }
    }
};

export default AnimalsController;