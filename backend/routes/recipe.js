const router = require("express").Router();
const recipeService = require("../services/recipe-service");

router.get("/", (req, res, next) => {
  recipeService.getAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(500);
      res.end();
    }
  });
});

router.get("/:id", (req, res) => {
  recipeService.getOne(req.params.id, res, (err, data) => {
    if (!err && data) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(404);
      res.end();
    }
  });
});

router.post("/", (req, res) => {
  recipeService.create(req.body, res, (err, data) => {
    if (!err) {
      res.sendStatus(201);
    } else {
      res.status(500);
      res.end();
    }
  });
});

router.put("/:id", (req, res) => {
  recipeService.update(req.params.id, req.body, res, (err, data) => {
    if (!err) {
      res.sendStatus(204);
    } else {
      res.status(500);
      res.end();
    }
  });
});

router.delete("/:id", (req, res) => {
  recipeService.deleteOne(req.params.id, res, (err, data) => {
    if (!err) {
      res.sendStatus(204);
    } else {
      res.status(500);
      res.end();
    }
  });
});

module.exports = router;
