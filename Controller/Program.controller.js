let Program = require('../Model/Program.Model');


let createProgram = async (req, res) => {
    try {
        let { programName, countryOrRegion, governmentAgency, description, objectivesAndGoals, yearLaunched, currentStatus, fundingUSD, duration, targetSpeciesOrEcosystems } = req.body;

        // Create and save program
        let newProgram = new Program({
            programName,
            countryOrRegion,
            governmentAgency,
            description,
            objectivesAndGoals,
            yearLaunched,
            currentStatus,
            fundingUSD,
            duration,
            targetSpeciesOrEcosystems
        });
        await newProgram.save();

        res.status(201).json({
            message: "Program created successfully",
            program: newProgram
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating program", error });
    }
}

let getPrograms = async (req, res) => {
    try {
        let programs = await Program.find();
        res.status(200).json(programs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching programs", error });
    }
}

let getProgramById = async (req, res) => {
    try {
        let program = await Program.findById(req.params.id);
        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.status(200).json(program);
    } catch (error) {
        res.status(500).json({ message: "Error fetching program", error });
    }
}

let updateProgram = async (req, res) => {
    try {
        let program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.status(200).json({ message: "Program updated successfully", program });
    } catch (error) {
        res.status(500).json({ message: "Error updating program", error });
    }
}

let deleteProgram = async (req, res) => {
    try {
        let program = await Program.findByIdAndDelete(req.params.id);
        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }
        res.status(200).json({ message: "Program deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting program", error });
    }
}

module.exports ={
    createProgram,
    getPrograms,
    getProgramById,
    updateProgram,
    deleteProgram
};