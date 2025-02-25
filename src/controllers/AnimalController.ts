import AnimalService from '../services/AnimalService';
import Animal from '../models/Animal';

class AnimalsController {
     getAllAnimals(req: Request, res: Response) {
        try {
            const animals = this.getAnimals();
            res.json(animals);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    },

    async getAnimalById(req, res) {
        try {
            const animal = await AnimalService.getAnimalById(req.params.id);
            res.json(animal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async getEndangeredAnimals(req, res) {
        try {
            const animals = await AnimalService.getEndangeredAnimals();
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAnimalsByHabitat(req, res) {
        try {
            const animals = await AnimalService.getAnimalsByHabitat(req.params.habitat);
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAnimalsBySpecies(req, res) {
        try {
            const animals = await AnimalService.getAnimalsBySpecies(req.params.species);
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async addAnimal(req, res) {
        try {
            const newAnimal = await AnimalService.addAnimal(req.body);
            res.status(201).json(newAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async updateAnimal(req, res) {
        try {
            const updatedAnimal = await AnimalService.updateAniaml(req.params.id, req.body);
            res.json(updatedAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async deleteAnimal(req, res) {
        try {
            const deletedAnimal = await AnimalService.deleteAnimal(req.params.id);
            res.json(deletedAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

export default AnimalsController;