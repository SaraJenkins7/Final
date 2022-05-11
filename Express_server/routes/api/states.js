const express = require("express");
const router = express();
const stateController = require("../../controllers/stateController");

router
    .route("/")
    .get(stateController.getStates)
    .get(stateController.getFunFacts)
    .get(stateController.getCapital)
    .get(stateController.getNickname)
    .get(stateController.getPopulation)
    .get(stateController.getAdmissionDate)
    .post(stateController.createNew)
    .patch(stateController.updateState)
    .delete(stateController.deleteState);

router.route("/:state").get(stateController.getState);
router.route("/:state/funfact").get(stateController.getFunFacts);
router.route("/:state/capital").get(stateController.getCapital);
router.route("/:state/nickname").get(stateController.getNickname);
router.route("/:state/population").get(stateController.getPopulation);
router.route("/:state/admission").get(stateController.getAdmissionDate);

module.exports = router;