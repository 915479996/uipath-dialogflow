'use strict';
exports.processRequest = function(req, res) {
if (req.body.result.action == "hi") {
    res.send('U say hi');
	console.log("U say hi");
  }
  else if (req.body.result.action == "bye")
  {
    res.send('U say bye');
	console.log("U say bye");
  }
};

