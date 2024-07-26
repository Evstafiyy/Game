const router = require("express").Router();
const { GameLine, Question } = require("../../db/models");
const verifyRefreshToken = require("../../middleware/verifyRefreshToken")

router.get("/", async (req, res) => {
  try {
    const gameLines = await GameLine.findAll();
    res.status(200).json({ message: "success", gameLines });
  } catch ({ message }) {
    res.status(500), json({ error: message });
  }
});

router.get("/withQuestions", verifyRefreshToken, async (req, res) => {
  try {
    const { gameId } = res.locals
    const gameLinesWithQuetions = await GameLine.findAll({ where: {id: gameId },
      include: 
        {
          model: GameLine,
          include: Question,
        },
    });
    res.status(200).json({ message: "success", gameLinesWithQuetions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
