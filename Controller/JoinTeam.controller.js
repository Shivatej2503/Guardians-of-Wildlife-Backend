let JoinTeam = require('../Model/JoinTeam.Model');

let joinTeam = async (req, res) => {
    try {
        let { name, email, interest } = req.body;

        // Create and save team member
        let teamMember = new JoinTeam({ name, email, interest });
        await teamMember.save();

        // Send personalized message
        res.status(201).json({
            message: `${name}, thank you for showing interest in joining`,
            teamMember
        });
    } catch (error) {
        res.status(500).json({ message: "Error joining team", error });
    }
};


let getTeamMembers = async (req, res) => {
    try {
        let teamMembers = await JoinTeam.find();
        res.status(200).json(teamMembers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching team members", error });
    }
}

let getTeamMemberById = async (req, res) => {
    try {
        let teamMember = await JoinTeam.findById(req.params.id);
        if (!teamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }
        res.status(200).json(teamMember);
    } catch (error) {
        res.status(500).json({ message: "Error fetching team member", error });
    }
}

let updateTeamMember = async (req, res) => {
    try {
        let teamMember = await JoinTeam.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!teamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }   
        res.status(200).json({ message: "Team member updated successfully", teamMember });
    } catch (error) {
        res.status(500).json({ message: "Error updating team member", error });
    }
}
let deleteTeamMember = async (req, res) => {
    try {
        let teamMember = await JoinTeam.findByIdAndDelete(req.params.id);
        if (!teamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }
        res.status(200).json({ message: "Team member deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting team member", error });
    }
}

module.exports = {
    joinTeam,
    getTeamMembers,
    getTeamMemberById,
    updateTeamMember,
    deleteTeamMember
};

