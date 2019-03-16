const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/api/recipes", projectController.getRecipes);
router.post("/api/recipes/create", projectController.createRecipe);
// router.get("/api/single-media/:id", projectController.getSingleMedia);
// router.delete("/api/delete-media/:id", projectController.deleteMedia);
// router.get("/api/edit-media/:id", projectController.getEditMedia);
// router.post("/api/edit-media/:id", projectController.postEditMedia);

module.exports = router;
