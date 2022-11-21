const { people } = require("../data");
const express = require("express");
const {
  getPeoples,
  getPeopleById,
  createPeople,
  updatePeopleById,
  deletePeopleById,
} = require("../controllers/people");
const app = express();

const router = express.Router();

router
  .get("/", getPeoples)
  .get("/:id", getPeopleById)
  .post("/", createPeople)
  .put("/:id", updatePeopleById)
  .delete("/:id", deletePeopleById);

module.exports = router;
