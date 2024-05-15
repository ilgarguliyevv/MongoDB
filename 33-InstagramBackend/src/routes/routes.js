const express = require("express")
const router = express.Router()

router.get("/posts", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

module.exports = router