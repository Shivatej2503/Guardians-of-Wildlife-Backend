let Wildlife = require('../Model/Wildlife.Model');

let addAnimal = async (req, res) => {
    try {
        let animal = new Wildlife(req.body);
        await animal.save();
        res.status(201).json({ message: "Animal added successfully", animal });
    } catch (error) {
        res.status(500).json({ message: "Error adding animal", error });
    }
}

let getAnimals = async (req, res) => {
    try {
        let animals = await Wildlife.find();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: "Error fetching animals", error });
    }
}

let getAnimalById = async (req, res) => {
    try {
        let animal = await Wildlife.findById(req.params.id);
        if (!animal) {
            return res.status(404).json({ message: "Animal not found" });
        }
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({ message: "Error fetching animal", error });
    }
}

let updateAnimal = async (req, res) => {
    try {
        let animal = await Wildlife.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!animal) {  
            return res.status(404).json({ message: "Animal not found" });
        }
        res.status(200).json({ message: "Animal updated successfully", animal });
    } catch (error) {
        res.status(500).json({ message: "Error updating animal", error });
    }
}
let deleteAnimal = async (req, res) => {
    try {
        let animal = await Wildlife.findByIdAndDelete(req.params.id);
        if (!animal) {
            return res.status(404).json({ message: "Animal not found" });
        }
        res.status(200).json({ message: "Animal deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting animal", error });
    }
}
module.exports = {
    addAnimal,
    getAnimals,
    getAnimalById,
    updateAnimal,
    deleteAnimal        
};