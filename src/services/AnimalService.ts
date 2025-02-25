import fs from 'fs/promises';
import path from 'path';
import {Animal} from "../models/Animal";

const filePath = path.resolve('data', 'data.json');

const AnimalService = {
    async getAnimals() {
        const data = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(data);
    },

    async getAnimalsById(id: number) {
        const animals = await this.getAnimals();
        const animal: String = animals.find((animal: { id: Number; }) => animal.id === id);
        if (!animal) throw new Error('Animal not found');
        return animal;
    },

    async getEndangeredAnimals() {
        const animals = await this.getAnimals()
        return animals.filter((animal: { isEndangered: any; }) => animal.isEndangered);
    },

    async getAnimalsByHabitat (habitat: string) {
        const animals = await this.getAnimals()
        return animals.filter((animal: { habitat: string; }) => animal.habitat.toLowerCase() === habitat.toLowerCase())
    },

    async getAnimalsBySpecies (species: string) {
        const animals = await this.getAnimals()
        return animals.filter((animal: { species: string; }) => animal.species.toLowerCase() === species.toLowerCase())
    },

    async addAnimal(newAnimal: Animal) {
        const animals = await this.getAnimals();
        const newId = animals.length + 1;
        const animal = { id: newId, ...newAnimal };
        animals.push(animal);
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return animal;
    },

    async updateAniaml(id: number, updatedAnimal: Animal) {
        const animals = await this.getAnimals()
        const index = animals.findIndex((animal: { id: number; }) => animal.id === id);
        if (index === -1) throw new Error('Animal not found');
        animals[index] = {...animals[index], ...updatedAnimal};
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return animals[index];
    },

    async deleteAnimal(id: number) {
        const animals = await this.getAnimals()
        const index = animals.findIndex((animal: { id: number; }) => animal.id === id);
        if (index === -1) throw new Error('Animal not found');
        const deletedAnimal = animals.splice(index, 1)[0];
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return deletedAnimal;
    }
};

export default AnimalService;
