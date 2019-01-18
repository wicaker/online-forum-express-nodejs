const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/post/taks', (req, res) => {
  const data = {
    material : req.body.material,
    challange : req.body.challange
  }
  fs.writeFile ("./data/tasks.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    }
  );
  res.json({"message" : " yeayy, your challenge has been dreated !"});
})


module.exports = router;