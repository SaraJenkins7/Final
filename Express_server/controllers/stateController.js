const State = require("../model/States");

const getStates = async (req, res) => {
    const states = await State.find();
    if (!states)
        return res.status(400).json({message: "No state found."});
    res.json(states);
};

const createNew = async (req, res) => {
    if (!req?.body.state) {
        return res.status(400).json({message: "State name is required"});
    }
    try {
        const result = await State.create({
            state: req.body.state,
        });
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
    }
};

const updateState = async (req, res) => {
    if (!req?.body.state) {
        return res.state(400).json({message: "State is required"});
    }
    const state = await State.findOne({_state: req.body.state}).exec();
    if(!state) {
        return res
            .status(204)
            .json({message: `No State matches the state ${req.body.state}`});
    }
    const result = await state.save();
    res.json(result);
};

const deleteState = async (req, res) => {
    if (!req?.body.state) {
        return res.status(400).json({message: "State is required"});
    }
    const state = await State.findOne({_state: req.body.state}).exec();
    
    if (!state) {
        return res
            .status(204)
            .json({message: `No State matches state ${req.body.state}`});
    }
    const result = await state.deleteOne({_state: req.body.state});
    res.json(result);
};

const getState = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required"});
    }
    const state = await State.findOne({_state: req.params.state}).exec();

    if (!state) {
        return res
            .status(204)
            .json({message: `No State matches state ${req.params.id}`});
    }
    res.json(state);
};

const getFunFacts = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required for fun facts"});
    }
    const funfacts = await State.findOne({_funfact: req.params.funfacts}).exec();

    if (!State) {
        return res
            .status(204)
            .json({message: `No fun facts available that match state ${req.params.state}`});
    }
    res.json(funfacts);
};

const getCapital = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required for capital"});
    }
    const capitalName = await State.findOne({_capital: req.params.capitalName}).exec();

    if (!State) {
        return res
            .status(204)
            .json({message: `No capital available that matches state ${req.params.state}`});
    }
    res.json(capitalName);
};

const getNickname = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required for nickname"});
    }
    const nickname = await State.findOne({_nickname: req.params.nickname}).exec();

    if (!State) {
        return res
            .status(204)
            .json({message: `No nickname available that matches state ${req.params.state}`});
    }
    res.json(nickname);
};

const getPopulation = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required for population"});
    }
    const population = await State.findOne({_population: req.params.population}).exec();

    if (!State) {
        return res
            .status(204)
            .json({message: `No population available that matches state ${req.params.state}`});
    }
    res.json(population);
};

const getAdmissionDate = async (req, res) => {
    if (!req?.params.state) {
        return res.status(400).json({message: "State is required for admission date"});
    }
    const admissionDate = await State.findOne({_admissionDate: req.params.admission}).exec();

    if (!State) {
        return res
            .status(204)
            .json({message: `No admission date available that matches state ${req.params.state}`});
    }
    res.json(admissionDate);
};

module.exports = {
    getStates,
    updateState,
    deleteState,
    createNew,
    getState,
    getFunFacts,
    getCapital,
    getNickname,
    getPopulation,
    getAdmissionDate
};